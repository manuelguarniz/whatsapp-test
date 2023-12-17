const verifyToken = (req, res) => {
  res.send('verifyToken')
}

const receivedMessage = (req, res) => {
  res.send('receivedMessage')
}

module.exports = {
  verifyToken,
  receivedMessage,
}