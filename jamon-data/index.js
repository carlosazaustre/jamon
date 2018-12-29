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

  render (file) {
    return readFile(`${this.dataPath}/${file}`, 'utf-8')
      .then(text => this.md.render(text))
      .catch(err => console.log(err))
  }

  batchRender () {
    return readdir(this.dataPath)
      .then(files => {
        let promises = []
        console.log('files')
        files.forEach(file => {
          console.log(file)
          promises.push(this.render(file))
        })

        return Promise.all(promises)
          .then(values => console.log(values))
      })
      .catch(err => console.log(err))
  }
}

module.exports = DataLib
