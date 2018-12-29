'use strict'

const pkg = require('../package.json')

const config = {
  posts: 'posts'
}

Object.assign(config, { pkg })

module.exports = config
