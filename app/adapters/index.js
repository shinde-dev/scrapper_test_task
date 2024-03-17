const OntheGridAdapter = require('./onthegrid_adapter.js')

module.exports = function getScrapAdapter (url) {
  if (url === process.env.ON_THE_GRID_URL) {
    return new OntheGridAdapter()
  }
}
