'use strict'

const fs = require('fs')
const path = require('path')
const util = require('util')
const MarkdownIt = require('markdown-it')

const readFile = util.promisify(fs.readFile)
const readdir = util.promisify(fs.readdir)

class DataLib {
  constructor (folder) {
    this.md = new MarkdownIt()
    this.dataPath = path.normalize(folder)
  }

  async render (file) {
    let rendered
    try {
      const text = await readFile(`${this.dataPath}/${file}`, 'utf-8')
      rendered = this.md.render(text)
    } catch (error) {
      // TODO: Use proper error handler
      console.log(error)
    }

    return rendered
  }

  async batchRender () {
    let files
    let values
    let promises = []
    try {
      files = await readdir(this.dataPath)
      files.forEach(file => promises.push(this.render(file)))
      values = await Promise.all(promises)
    } catch (error) {
      // TODO: Use proper error handler
      console.log(error)
    }

    return values
  }
}

module.exports = DataLib
