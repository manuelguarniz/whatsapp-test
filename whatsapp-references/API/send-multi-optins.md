# Send multi optins

## Sender

```bash
curl --location 'https://graph.facebook.com/v17.0/154532091068651/messages' \
--header 'Content-Type: application/json' \
--data '{
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "51975757409",
    "type": "interactive",
    "interactive": {
        "type": "list",
        "body": {
            "text": "Tengo las siguientes opciones"
        },
        "footer": {
            "text": "seleciona el de tu preferencia"
        },
        "action": {
            "button": "Ver opciones",
            "sections": [
                {
                    "title": "Entradas",
                    "rows": [
                        {
                            "id": "id-entrada-ceviche",
                            "title": "Ceviche Simple",
                            "description": "Con prescado fresco"
                        },
                        {
                            "id": "id-entrada-ceviche-mixto",
                            "title": "Ceviche Mixto",
                            "description": "Pescado fresco y buenas carnes"
                        }
                    ]
                },
                {
                    "title": "Sopas",
                    "rows": [
                        {
                            "id": "id-entrada-sopa-1",
                            "title": "Sopa de fideos",
                            "description": "incluye carne"
                        },
                        {
                            "id": "id-entrada-sopa-2",
                            "title": "Sopa de semola",
                            "description": "recomendado!"
                        }
                    ]
                }
            ]
        }
    }
}
'
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
            "id": "wamid.HBgLNTE5NzU3NTc0MDkVAgARGBI0RTk0Rjk0QkM2OENCMTFFNjEA"
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
                                "id": "wamid.HBgLNTE5NzU3NTc0MDkVAgARGBI0RTk0Rjk0QkM2OENCMTFFNjEA",
                                "status": "sent",
                                "timestamp": "1702861556",
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
                                "id": "wamid.HBgLNTE5NzU3NTc0MDkVAgARGBI0RTk0Rjk0QkM2OENCMTFFNjEA",
                                "status": "delivered",
                                "timestamp": "1702861557",
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

4. Read

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
                                "id": "wamid.HBgLNTE5NzU3NTc0MDkVAgARGBI0RTk0Rjk0QkM2OENCMTFFNjEA",
                                "status": "read",
                                "timestamp": "1702861868",
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

5. Select optins

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
                        "contacts": [
                            {
                                "profile": {
                                    "name": "@mguarniz"
                                },
                                "wa_id": "51975757409"
                            }
                        ],
                        "messages": [
                            {
                                "context": {
                                    "from": "15550293848",
                                    "id": "wamid.HBgLNTE5NzU3NTc0MDkVAgARGBI0RTk0Rjk0QkM2OENCMTFFNjEA"
                                },
                                "from": "51975757409",
                                "id": "wamid.HBgLNTE5NzU3NTc0MDkVAgASGBYzRUIwNTMzQTBBREJBMjYxMkEwMjExAA==",
                                "timestamp": "1702861949",
                                "type": "interactive",
                                "interactive": {
                                    "type": "list_reply",
                                    "list_reply": {
                                        "id": "id-entrada-sopa-2",
                                        "title": "Sopa de semola",
                                        "description": "recomendado!"
                                    }
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
