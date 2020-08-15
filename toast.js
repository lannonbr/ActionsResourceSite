// Code credit to Chris Biscardi

const { promises: fs } = require("fs")
const path = require("path")
const MDXPostsSource = require("./fetch-mdx-posts")
const FaunaDataSource = require("./fetch-fauna-changelog-data")

exports.sourceData = async ({ withCache, createPage }) => {
  return Promise.all([
    withCache("mdx-posts", MDXPostsSource.sourceData({ createPage })),
    withCache("fauna-changelog-entries", FaunaDataSource.sourceData({})),
  ])
}

exports.prepData = async ({ cacheDir, publicDir }) => {
  // have to make sure the directory we want to write in exists
  // We can probably avoid this by offering some kind of "non-filesystem"-based
  // API for adding data to paths
  await fs.mkdir(path.resolve(publicDir, "src/pages"), { recursive: true })

  // Generate fauna json page
  const faunaData = require(path.resolve(
    cacheDir,
    "fauna-changelog-entries.json"
  ))

  await fs.writeFile(
    path.resolve(publicDir, "src/pages/changelog.json"),
    JSON.stringify({ fauna: faunaData })
  )
}
