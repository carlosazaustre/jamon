'use strict'

const MarkdownLib = require('../lib/markdown')
const EngineLib = require('../lib/engine')

class DataService {
  constructor () {
    this.data = new MarkdownLib()
    this.engine = new EngineLib()
  }

  generateFile (filename) {
    const text = this.data.readFile(filename)
    const html = this.data.renderData(text)
    this.engine.renderTemplate(filename, html)
  }
}

module.exports = DataService
