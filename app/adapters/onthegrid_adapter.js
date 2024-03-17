const { parse } = require('node-html-parser')
const pathToHtmlPages = require('path').join(process.env.HTML_PAGES_PATH)
const fs = require('fs')

class OntheGridAdapter {
  constructor () {
    this.dirPath = pathToHtmlPages
  }

  parseData () {
    const data = []
    const files = this.files()

    for (const file of files) {
      const content = fs.readFileSync(this.dirPath + file, 'utf-8')
      this.root = parse(content)

      data.push({
        title: this.title(),
        geloacation: this.geloacation(),
        city: this.city(),
        country: this.country()
      })
    }

    return data
  }

  title (selector = 'title') {
    const element = this.element(selector)

    return element ? element.text.replace('On the Grid : ', '') : '-'
  }

  geloacation (selector = '.overview_contact a.underline') {
    const element = this.element(selector)

    return element ? element.rawText : '-'
  }

  city (selector = 'aside.title-breadcrumb') {
    const element = this.element(selector)

    return element ? element.rawText.split(',')[0] : '-'
  }

  country (selector = 'aside.title-breadcrumb') {
    const element = this.element(selector)

    return element ? element.rawText.split(',')[1].replace('\n ', '') : '-'
  }

  element (selector) {
    return this.root.querySelector(selector)
  }

  files () {
    return fs.readdirSync(this.dirPath)
  }
}

module.exports = OntheGridAdapter
