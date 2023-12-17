const { v4: uuidv4 } = require('uuid');

const health = (req, res) => {
  res.send(`OK: ${uuidv4()}`)
}

const verifyToken = (req, res) => {
  try {
    const accessToken = 'b960b5b4-0d14-4b81-92ae-c5f7a39a80e3' //uuidv4()
    const token = req.query.hub?.verify_token
    const challenge = req.body.hub?.challenge

    console.log('token: ', token)
    console.log('challenge: ', challenge)

    if (challenge && token && token == accessToken) {
      res.status(200).send(challenge)
    } else {
      res.status(400).send();
    }
  } catch (e) {
    res.status(400).send();
  }
}

const receivedMessage = (req, res) => {
  res.send('receivedMessage')
}

module.exports = {
  verifyToken,
  receivedMessage,
  health,
}