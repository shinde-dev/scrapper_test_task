const express = require('express')
const scraperRouter = express.Router()
const getScrapAdapter = require('../adapters/index.js')
const BadRequestError = require('../errors/badRequestError')
const InternalServerError = require('../errors/internalServerError')
const Responder = require('../../lib/expressResponder')

scraperRouter.get('/', async (req, res) => {
  const { url } = req.query

  if (!url) {
    return Responder.operationFailed(res, new BadRequestError('Please pass url'))
  }

  try {
    const adapter = getScrapAdapter(url)
    const data = adapter.parseData()

    Responder.success(res, {
      data,
      count: data.length
    })
  } catch (e) {
    return Responder.operationFailed(res, new InternalServerError(e.message))
  }
})

module.exports = scraperRouter
