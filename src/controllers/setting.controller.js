const { v4: uuidv4 } = require('uuid');

const health = (req, res) => {
  res.send(`OK: ${uuidv4()}`)
}

module.exports = {
  health
}