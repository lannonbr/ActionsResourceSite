// Code credit to Chris Biscardi

import { promises as fs } from "fs"
import path from "path"
import frontmatter from "gray-matter"
import mdx from "@mdx-js/mdx"
import globby from "globby"
import rehypePrism from "./utils/prism-rehype-plugin/index.js"
import cloudinary from "rehype-local-image-to-cloudinary"
import rehypeSlug from "rehype-slug"

export const sourceData = async ({ setDataForSlug, ...options }) => {
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
                baseDir: path.join(".", "docs", type),
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

      await setDataForSlug(slug, {
        component: {
          mode: "source",
          value: `/** @jsx mdx */
          import {mdx} from '@mdx-js/preact';
          ${compiledMDX}`,
        },
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
