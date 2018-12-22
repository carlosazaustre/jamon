'use strict'

const DataService = require('./services/data-service')
const data = new DataService()

function generateHTMLFiles () {
  data.generateFile('index')
  data.generateFile('another-page')
}

generateHTMLFiles()
