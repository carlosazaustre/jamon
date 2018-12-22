'use strict'

const path = require('path')

exports.config = {
  paths: {
    data: path.join(__dirname, '../data'),
    public: path.join(__dirname, '../public')
  }
}
