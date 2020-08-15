const { firefox } = require("playwright-firefox")
const fs = require("fs")
const readline = require("readline")
const path = require("path")
const ogReactComponentScript = fs.readFileSync("./dist/image.js", "utf-8")
const globby = require("globby")

async function getTitle(path) {
  const readStream = fs.createReadStream(path, { encoding: "utf-8" })

  const readLineInterface = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity,
  })

  for await (const line of readLineInterface) {
    if (line.startsWith("title")) {
      return line
    }
  }
}

async function run() {
  const files = await globby("../../../docs/**/*.mdx")

  const browser = await firefox.launch()
  const page = await browser.newPage()

  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
        />
        <style>*{ padding: 0; margin: 0; font-family: "Inter", Arial, Helvetica, sans-serif; }</style>
      </head>
      <body>
        <div id="opengraph"><p>Opengraph component not rendered yet</p></div>
      </body>
    </html>
  `)

  for (const filename of files) {
    const line = await getTitle(filename)

    let [_, directFilename] = filename.split("/").slice(4)
    directFilename = directFilename.slice(0, -4)

    let title = line.slice(7)

    if (title.startsWith('"')) {
      title = title.slice(1, -1)
    }

    await page.addScriptTag({
      content: ogReactComponentScript,
    })

    if (!fs.existsSync(path.join(__dirname, "dist", "posts"))) {
      fs.mkdirSync(path.join(__dirname, "dist", "posts"))
    }

    const screenshotPath = path.join(
      __dirname,
      "dist",
      "posts",
      `${directFilename}.jpg`
    )

    console.log(screenshotPath)

    await page.screenshot({
      type: "jpeg",
      quality: 75,
      path: screenshotPath,
      clip: { x: 0, y: 0, width: 1200, height: 630 },
    })
  }

  await browser.close()
}

run()
