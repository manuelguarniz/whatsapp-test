const { post } = require('../shared/http-client');

const SENDER_PHONENUMBER_ID = '154532091068651'

const sendSimpleMessage = async (to, message) => {
  const body = {
    messaging_product: 'whatsapp',
    to: to,
    text: {
      body: message
    }
  }
  const res = await post({
    url: `https://graph.facebook.com/v17.0/${SENDER_PHONENUMBER_ID}/messages`,
    body
  })

  console.log(res)
  return res;
}

const sendMultiOptins = async (to) => {
  const body = {
    messaging_product: 'whatsapp',
    number: to,
    message: {
      title: '¿Que te interesa ver?',
      message: 'Recuerda todo este contenido es gratis y estaria genial que me siguas!',
      footer: 'Gracias',
      buttons: [
        {
          body: '😎 Cursos'
        },
        {
          body: '👉 Youtube'
        },
        {
          body: '😁 Telegram'
        }
      ]
    }
  }
  const res = await post({
    url: `https://graph.facebook.com/v17.0/${SENDER_PHONENUMBER_ID}/messages`,
    body
  })

  console.log(res)
  return res;
}

const sendListOptins = async (to) => {
  const body = {
    messaging_product: 'whatsapp',
    recipient_type: 'individual',
    to: to,
    type: 'interactive',
    interactive: {
      type: 'list',
      body: {
        text: 'Tengo las siguientes opciones'
      },
      footer: {
        text: 'seleciona el de tu preferencia'
      },
      action: {
        button: 'Ver opciones',
        sections: [
          {
            title: 'Entradas',
            rows: [
              {
                id: 'id-entrada-ceviche',
                title: 'Ceviche Simple',
                description: 'Con prescado fresco'
              },
              {
                id: 'id-entrada-ceviche-mixto',
                title: 'Ceviche Mixto',
                description: 'Pescado fresco y buenas carnes'
              }
            ]
          },
          {
            title: 'Sopas',
            rows: [
              {
                id: 'id-entrada-sopa-1',
                title: 'Sopa de fideos',
                description: 'incluye carne'
              },
              {
                id: 'id-entrada-sopa-2',
                title: 'Sopa de semola',
                description: 'recomendado!'
              }
            ]
          }
        ]
      }
    }
  }
  const res = await post({
    url: `https://graph.facebook.com/v17.0/${SENDER_PHONENUMBER_ID}/messages`,
    body
  })

  console.log(res)
  return res;
}


module.exports = {
  sendSimpleMessage,
  sendMultiOptins,
  sendListOptins,
}