'use strict'

const fs = require('fs')
const MarkdownIt = require('markdown-it')
const { config } = require('../config')

class MarkdownLib {
  constructor () {
    this.md = new MarkdownIt()
  }

  readFile (fileName) {
    return new Promise((resolve, reject) => {
      fs.readFile(`${config.paths.data}/${fileName}.md`, 'utf-8', (err, text) => {
        if (err) {
          reject(err)
        }
        resolve(text)
      })
    })
  }

  convertToHTML (text) {
    const html = this.md.render(text)
    return html
  }
}

module.exports = MarkdownLib
