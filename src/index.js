'use strict'

const DataService = require('./services/data-service')

const fileNames = [
  'index',
  'another-page'
]

const data = new DataService()
data.generateBatchFiles(fileNames)
