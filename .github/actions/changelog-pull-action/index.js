const cheerio = require("cheerio")
const fetch = require("node-fetch")

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

fetchBlogposts().then(ActionsPosts => {
  console.log(ActionsPosts)
})
