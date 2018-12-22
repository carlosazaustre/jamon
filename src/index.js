'use strict'

const fs = require('fs')
const path = require('path')
const MarkdownIt = require('markdown-it')

const CONTENT_PATH = path.join(__dirname, '../data')
const PUBLIC_PATH = path.join(__dirname, '../public')

const md = new MarkdownIt()

function readAndConvert () {
  const data = fs.readFileSync(`${CONTENT_PATH}/example.md`, 'utf-8')
  const result = md.render(data)
  return result
}

function generateFile () {
  const content = readAndConvert()
  const layout = `<!doctype html>
    <html>
      <head>
        <title>Test</title>
      </head>
      <body>
        <div id='app'>${content}</div>
      </body>
    </html>`.replace(/\n/gm, '')

  fs.writeFileSync(`${PUBLIC_PATH}/index.html`, layout)
}

generateFile()
