'use strict'

const fs = require('fs')
const path = require('path')
const util = require('util')
const MarkdownIt = require('markdown-it')

class DataLib {
  constructor (dir) {
    this.md = new MarkdownIt()
    this.dataPath = dir
  }

  render (file) {
    const readFile = util.promisify(fs.readFile)

    return readFile(`${this.dataPath}/${file}.md`, 'utf-8')
      .then((text) => this.md.render(text))
      .catch((err) => console.log(err))
  }
}

const data = new DataLib('example')
data.render('post').then(html => console.log(html))
