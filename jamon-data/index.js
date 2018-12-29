'use strict'

const fs = require('fs')
const path = require('path')
const MarkdownIt = require('markdown-it')

class DataLib {
  constructor (dir) {
    this.md = new MarkdownIt()
    this.dataPath = dir
  }

  render (file) {
    const promise = new Promise((resolve, reject) => {
      fs.readFile(`${this.dataPath}/${file}.md`, 'utf-8', (err, text) => {
        if (err) {
          reject(err)
        } else {
          const html = this.md.render(text)
          resolve(html)
        }
      })
    })

    return promise
  }
}

const data = new DataLib('example')
data.render('post').then(html => console.log(html))
