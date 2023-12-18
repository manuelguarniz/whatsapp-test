const dotenv = require('dotenv').config();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const token = process.env.WHATSAPP_TOKEN;

const STATIC_HEADERS = {
  'Content-Type': "application/json",
  Authorization: `Bearer ${token}`
}

const post = async ({url, body = {}, headers}) => {
  const request_sending = JSON.stringify(body)
  const header_sending = JSON.stringify(headers || STATIC_HEADERS)
  console.log(`cURL: ${url} body: ${request_sending} headers: ${header_sending}`)
  const result = await fetch(url, {
    method: 'POST',
    headers: headers || STATIC_HEADERS,
    body: request_sending,
  })
  const res = await result.json()
  return res
}

module.exports = {
  post,
}