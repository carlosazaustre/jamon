'use strict'

const fs = require('fs')
const path = require('path')
const MarkdownIt = require('markdown-it')

const CONTENT_PATH = path.join(__dirname, 'content')
const md = new MarkdownIt()

function readAndConvert (err, data) {
  if (err) throw err

  const result = md.render(data)
  console.log(result)
}

fs.readFile(`${CONTENT_PATH}/example.md`, 'utf-8', readAndConvert)
