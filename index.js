require('dotenv').config()
const express = require('express')
const app = express()
const logger = require('morgan')
const PORT = process.env.PORT || 3000

const ScraperController = require('./app/controllers/scraper.js')

app.use(logger('dev'))

app.use('/scrap', ScraperController)

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
