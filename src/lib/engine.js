'use strict'

const fs = require('fs')
const Layout = require('../templates/layout')
const { config } = require('../config')

class EngineLib {
  constructor () {
    this.layout = Layout
    this.path = config.paths.public
  }

  renderPage (filename, data) {
    const template = this.layout(data)
    return new Promise((resolve, reject) => {
      fs.writeFile(
        `${this.path}/${filename}.html`,
        template,
        (err, page) => {
          if (err) {
            reject(err)
          }
          resolve(page)
        })
    })
  }
}

module.exports = EngineLib
