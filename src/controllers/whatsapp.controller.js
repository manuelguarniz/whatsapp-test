const { json } = require('express/lib/response');
const { sendSimpleMessage, sendMultiOptins, sendListOptins } = require('../services/whatsapp.service');

const dotenv = require('dotenv').config();

const token = process.env.WHATSAPP_TOKEN;

const verifyToken = (req, res) => {
  /**
   * UPDATE YOUR VERIFY TOKEN
   *This will be the Verify Token value when you set up webhook
  **/
  const verify_token = process.env.VERIFY_TOKEN;

  // Parse params from the webhook verification request
  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  // Check if a token and mode were sent
  if (mode && token) {
    // Check the mode and token sent are correct
    if (mode === "subscribe" && token === verify_token) {
      // Respond with 200 OK and challenge token from the request
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
}

const receivedMessage = (req, res) => {
  // Parse the request body from the POST
  let body = req.body;

  // Check the Incoming webhook message
  console.log(JSON.stringify(req.body, null, 2));

  // info on WhatsApp text message payload: https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks/payload-examples#text-messages
  if (req.body.object) {
    if (
      req.body.entry &&
      req.body.entry[0].changes &&
      req.body.entry[0].changes[0] &&
      req.body.entry[0].changes[0].value.messages &&
      req.body.entry[0].changes[0].value.messages[0]
    ) {
      let phone_number_id =
        req.body.entry[0].changes[0].value.metadata.phone_number_id;
      let from = req.body.entry[0].changes[0].value.messages[0].from; // extract the phone number from the webhook payload
      let msg_body = req.body.entry[0].changes[0].value.messages[0].text?.body; // extract the message text from the webhook payload

      console.log('phone_number_id: ', phone_number_id)
      console.log('from: ', from)
      console.log('msg_body: ', msg_body)

      // const body = {
      //   messaging_product: "whatsapp",
      //   to: from,
      //   type: "template",
      //   template: {
      //     name: "hello_world",
      //     language: {
      //       code: "en_US"
      //     }
      //   }
      // }
      
      // fetch(`https://graph.facebook.com/v17.0/${phone_number_id}/messages`, {
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Authorization": token
      //   },
      //   body: JSON.stringify(body)
      // })
      //   .then(result => result.json())
      //   .then(x => console.log(x))

      // axios({
      //   method: "POST", // Required, HTTP method, a string, e.g. POST, GET
      //   url:
      //     "https://graph.facebook.com/v12.0/" +
      //     phone_number_id +
      //     "/messages?access_token=" +
      //     token,
      //   data: {
      //     messaging_product: "whatsapp",
      //     to: from,
      //     text: { body: "Ack: " + msg_body },
      //   },
      //   headers: { "Content-Type": "application/json" },
      // });
    }
    res.sendStatus(200);
  } else {
    // Return a '404 Not Found' if event is not from a WhatsApp API
    res.sendStatus(404);
  }
}

const simpleMessage = async (req, res) => {
  try {
    console.log('body: ', req.body)
    const to = req.body['to']
    const message = req.body['text']['body']
    // const result = await sendSimpleMessage(to, message)
    // const result = await sendMultiOptins(to)
    const result = await sendListOptins(to)
    if (result?.error) {
      res.status(500).send({ error: result.error.message })
    }
    return res.status(200).send(result)
  } catch (error) {
    console.error(error)
    res.status(500).send(error.message)
  }
}

module.exports = {
  verifyToken,
  receivedMessage,
  simpleMessage,
}