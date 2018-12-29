'use strict'

const path = require('path')
const pkg = require('../package.json')

const config = {
  posts: path.resolve(__dirname, '../posts')
}

Object.assign(config, { pkg })

module.exports = config
