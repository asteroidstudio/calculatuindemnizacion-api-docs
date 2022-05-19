---
sidebar_position: 4
---

# Enviar shortlink

Enviar shortlink a un cliente para que pueda subir documentación

## URL

```
POST /documents/send-shortlink
```

### Parámetros POST

Nombre | Tipo |  Comentarios 
--- | --- | --- | 
`client_id` | _int_ | Identificador del cliente. Obligatorio
`via_email` | _int_ | 0: no enviar por email, 1: sí enviar por email. Obligatorio
`via_sms` | _int_ | 0: no enviar por sms, 1: sí enviar por sms. Obligatorio
`generate_new` | _int_ | 0: mantener shortlink actual si existe, 1: generar nuevo. Obligatorio
`email_message` | _string_ | Texto del mensaje a enviar por email. Obligatorio si via_email es 1
`sms_message` | _string_ | Texto del mensaje a enviar por SMS. Obligatorio si via_sms es 1


### Ejemplo

```shell
curl --location --request POST 'https://calculatuindemnizacion.es/api/documents/send-shortlink'  \
--header 'Authorization: Bearer {access_token}' \
--form 'client_id="{client_id}"' \
--form 'via_email="{via_email}"' \
--form 'via_sms="{via_sms}"' \
--form 'generate_new="{generate_new}"' \
--form 'email_message="{email_message}"' \
--form 'sms_message="{sms_message}"'
```

:::note Nota
En la llamada anterior se debe sustituir `{access_token}`, `{client_id}`, etc, por los valores del **_access_token_**, **_client_id_**, etc, reales
:::

## Respuesta correcta

La respuesta retorna los siguientes valores:

Nombre | Tipo | Comentarios 
--- | --- | --- |
**shortlink_url** | _string_ | URL al shortlink del cliente
**shortlink_expiration_date** | _bool_ | Fecha de expiración del shorlink en formato _YYYY-MM-DD HH:mm:ss_

Por ejemplo:

```json title="Status: 200 Ok"
{
    "shortlink_url": "https://bit.ly/s67icyCc",
    "shortlink_expiration_date": "2022-08-17 22:38:35"    
}
```

## Respuesta incorrecta

Si hay un error de validación de los parámetros POST, se retorna el código `422`:

```json title="Status: 422 Unprocessable Entity"
{
    "message": "The given data was invalid.",
    "errors": {
        "sms_message": [
            "El campo sms message es obligatorio cuando via sms es 1."
        ]
    }
}
```