// Code credit to Chris Biscardi

const fs = require("fs").promises
const path = require("path")
const frontmatter = require("gray-matter")
const mdx = require("@mdx-js/mdx")
const rehypeSlug = require("rehype-slug")
const cloudinary = require("rehype-local-image-to-cloudinary")
const rehypePrism = require("./src/utils/prism-rehype-plugin")
const globby = require("globby")

exports.sourceData = async ({ createPage, ...options }) => {
  console.log("sourceData")
  const files = await globby("./docs/**/*.mdx")

  return Promise.all(
    files.map(async (filename) => {
      const file = await fs.readFile(`./${filename}`, "utf-8")

      const type = filename.split("/")[2]
      let compiledMDX

      const { data, content } = frontmatter(file)

      try {
        compiledMDX = await mdx(content, {
          rehypePlugins: [
            rehypePrism,
            rehypeSlug,
            [
              cloudinary,
              {
                baseDir: path.join(__dirname, "docs", type),
                uploadFolder: "gars.dev",
              },
            ],
          ],
        })
      } catch (e) {
        console.log(e)
        throw e
      }

      const slug = filename.split("/").slice(2).join("/").slice(0, -4)

      await createPage({
        module: `/** @jsx mdx */
        import {mdx} from '@mdx-js/preact';
        ${compiledMDX}`,
        slug,
        data: { ...data, slug },
      })

      // Data to be stored in `mdx-posts.json` file
      return {
        ...data,
        slug,
      }
    })
  )
}
