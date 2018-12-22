'use strict'

const fs = require('fs')
const Layout = require('../templates/layout')
const { config } = require('../config')

class EngineLib {
  constructor () {
    this.layout = Layout
    this.path = config.paths.public
  }

  renderTemplate (filename, data) {
    const toRender = this.layout(data)
    fs.writeFileSync(`${this.path}/${filename}.html`, toRender)
  }
}

module.exports = EngineLib
