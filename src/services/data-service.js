'use strict'

const MarkdownLib = require('../lib/markdown')
const EngineLib = require('../lib/engine')

class DataService {
  constructor () {
    this.data = new MarkdownLib()
    this.engine = new EngineLib()
  }

  async generateFile (filename) {
    try {
      const text = await this.data.readFile(filename)
      const html = await this.data.convertToHTML(text)
      this.engine.renderPage(filename, html)
    } catch (err) {
      throw err
    }
  }
}

module.exports = DataService
