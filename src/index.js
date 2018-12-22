'use strict'

const fs = require('fs')
const DataAdapter = require('./lib/data')
const Layout = require('./layouts/layout')
const { config } = require('./config')

const adapter = new DataAdapter()

function generateFiles () {
  const data1 = adapter.readFile('index')
  const file1 = adapter.render(data1)

  const data2 = adapter.readFile('another-page')
  const file2 = adapter.render(data2)

  fs.writeFileSync(`${config.publicPath}/index.html`, Layout(file1))
  fs.writeFileSync(`${config.publicPath}/another-page.html`, Layout(file2))
}

generateFiles()
