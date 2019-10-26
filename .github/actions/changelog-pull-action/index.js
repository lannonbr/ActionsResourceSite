const cheerio = require("cheerio")
const fetch = require("node-fetch")
const core = require("@actions/core")
const faunadb = require("faunadb")
const q = faunadb.query

require("dotenv").config()

const client = new faunadb.Client({ secret: process.env.FAUNADB_TOKEN })

// Fetch blogposts in GitHub changelog related to GitHub Actions
const fetchBlogposts = async () => {
  // Pull down page and pass it into Cheerio
  let html = await fetch("https://github.blog/changelog/").then(resp =>
    resp.text()
  )
  const $ = cheerio.load(html)

  let ActionsPosts = []

  $(".post-item").each((idx, item) => {
    // Find the text from the <time> element of a post
    let date = item.children
      .filter(
        child =>
          child.name === "a" && child.attribs.class.includes("post-item__date")
      )[0]
      .children.filter(child => child.name === "time")[0]
      .firstChild.data.trim()

    // Find the <a> element to link to the actual post
    let linkElement = item.children
      .filter(
        child =>
          child.name === "div" &&
          child.attribs.class.includes("post-item__content")
      )[0]
      .children.filter(child => child.name === "h4")[0]
      .children.filter(child => child.name === "a")[0]

    let href = linkElement.attribs.href
    let title = linkElement.firstChild.data.trim()

    // Add it to an array of posts if it includes "Action" in the title
    if (title.includes("Action")) {
      ActionsPosts.push({ href, title, date })
    }
  })

  return ActionsPosts
}

// hit the all_changelog_entries index and get the actual documents from such
const getPostsFromFauna = async () => {
  let faunaPosts = []

  return client
    .paginate(q.Match(q.Index("all_changelog_entries")))
    .map(ref => q.Get(ref))
    .each(page => {
      page.map(doc => {
        faunaPosts.push(doc)
      })
    })
    .then(() => {
      return faunaPosts
    })
}

// create a new document with the passed in data
const addPostToFauna = async post => {
  await client.query(
    q.Create(q.Collection("changelog_entries"), {
      data: post,
    })
  )
}

const run = async () => {
  const actionPosts = await fetchBlogposts()
  const faunaPosts = await getPostsFromFauna()

  let newPostsAdded = 0

  for (const actionPost of actionPosts) {
    // If actionPost is not in the faunaPosts array, add it to Fauna
    if (
      faunaPosts.find(post => {
        return post.data.href === actionPost.href
      }) === undefined
    ) {
      await addPostToFauna(actionPost)
      newPostsAdded++
    }
  }

  // Set output of how many posts were added to Fauna so a following step can figure out if the site needs to be rebuilt
  core.setOutput("newFaunaPostsAdded", newPostsAdded.toString())
}

run()
