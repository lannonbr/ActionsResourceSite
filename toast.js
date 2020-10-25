// Code credit to Chris Biscardi

import * as MDXPostsSource from "./fetch-mdx-posts.js"
import * as FaunaDataSource from "./fetch-fauna-changelog-data.js"

export const sourceData = async ({ setDataForSlug }) => {
  const [mdxPosts, faunaData] = await Promise.all([
    MDXPostsSource.sourceData({ setDataForSlug }),
    FaunaDataSource.sourceData({}),
  ])

  await setDataForSlug("/changelog", {
    data: { fauna: faunaData },
  })
}
