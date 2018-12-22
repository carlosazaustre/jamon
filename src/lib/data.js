'use strict'

const fs = require('fs')
const MarkdownIt = require('markdown-it')
const { config } = require('../config')

class DataAdapter {
  constructor () {
    this.md = new MarkdownIt()
  }

  readFile (fileName) {
    let data
    try {
      data = fs.readFileSync(`${config.dataPath}/${fileName}.md`, 'utf-8')
    } catch (err) {
      throw err
    }

    return data
  }

  render (data) {
    const rendered = this.md.render(data)
    return rendered
  }
}

module.exports = DataAdapter
