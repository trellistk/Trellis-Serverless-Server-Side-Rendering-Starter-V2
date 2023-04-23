'use strict'

const { render } = require('simple-sls-ssr')

module.exports.handler = async (event, context) => {
  return await render('index', {})
}
