# Send simple message

## Sender

```bash
curl --location 'https://graph.facebook.com/v17.0/154532091068651/messages' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer EAAVCr9Hzk3cBO6qWjEh6yiv9AhWcMXHYW72pRi2FwlUEDDQp2j2r4iC7GzHgUfbDJZAjgHVhDLMbIxZB4oX3aDryR5TACccZBt2yzTf6FtKuXJcKy6vsENsXNnhChrHCZAAG039gamH8yg8OWOBOPGAEBnliFpTMJaytX90DNvZBoJcw8W8pI6ZAFcwtYq81tTZB1lOZBBpzwQCeUyLU' \
--data '{
    "messaging_product": "whatsapp",
    "to": "51975757409",
    "text": {
        "body": "hello world!"
    }
}'
```

**Response**

```json
{
  "messaging_product": "whatsapp",
  "contacts": [
      {
          "input": "51975757409",
          "wa_id": "51975757409"
      }
  ],
  "messages": [
      {
          "id": "wamid.HBgLNTE5NzU3NTc0MDkVAgARGBJFMkIzNjBDMDFGODI5QzI3QkEA"
      }
  ]
}
```

## Webhooks

1. Sent

   ```json
   {
       "object": "whatsapp_business_account",
       "entry": [
           {
               "id": "156116987574877",
               "changes": [
                   {
                       "value": {
                           "messaging_product": "whatsapp",
                           "metadata": {
                               "display_phone_number": "15550293848",
                               "phone_number_id": "154532091068651"
                           },
                           "statuses": [
                               {
                                   "id": "wamid.HBgLNTE5NzU3NTc0MDkVAgARGBJFMkIzNjBDMDFGODI5QzI3QkEA",
                                   "status": "sent",
                                   "timestamp": "1702828744",
                                   "recipient_id": "51975757409",
                                   "conversation": {
                                       "id": "69c45e0c0ca2e935df1e0c43c2d18a07",
                                       "expiration_timestamp": "1702881180",
                                       "origin": {
                                           "type": "utility"
                                       }
                                   },
                                   "pricing": {
                                       "billable": true,
                                       "pricing_model": "CBP",
                                       "category": "utility"
                                   }
                               }
                           ]
                       },
                       "field": "messages"
                   }
               ]
           }
       ]
   }
   ```
2. Delivered

   ```json
   {
     "object": "whatsapp_business_account",
     "entry": [
         {
             "id": "156116987574877",
             "changes": [
                 {
                     "value": {
                         "messaging_product": "whatsapp",
                         "metadata": {
                             "display_phone_number": "15550293848",
                             "phone_number_id": "154532091068651"
                         },
                         "statuses": [
                             {
                                 "id": "wamid.HBgLNTE5NzU3NTc0MDkVAgARGBJFMkIzNjBDMDFGODI5QzI3QkEA",
                                 "status": "delivered",
                                 "timestamp": "1702828744",
                                 "recipient_id": "51975757409",
                                 "conversation": {
                                     "id": "69c45e0c0ca2e935df1e0c43c2d18a07",
                                     "origin": {
                                         "type": "utility"
                                     }
                                 },
                                 "pricing": {
                                     "billable": true,
                                     "pricing_model": "CBP",
                                     "category": "utility"
                                 }
                             }
                         ]
                     },
                     "field": "messages"
                 }
             ]
         }
     ]
   }
   ```
3. Read

   ```json
   {
       "object": "whatsapp_business_account",
       "entry": [
           {
               "id": "156116987574877",
               "changes": [
                   {
                       "value": {
                           "messaging_product": "whatsapp",
                           "metadata": {
                               "display_phone_number": "15550293848",
                               "phone_number_id": "154532091068651"
                           },
                           "statuses": [
                               {
                                   "id": "wamid.HBgLNTE5NzU3NTc0MDkVAgARGBJFMkIzNjBDMDFGODI5QzI3QkEA",
                                   "status": "read",
                                   "timestamp": "1702829398",
                                   "recipient_id": "51975757409"
                               }
                           ]
                       },
                       "field": "messages"
                   }
               ]
           }
       ]
   }
   ```
4. a
5. a
