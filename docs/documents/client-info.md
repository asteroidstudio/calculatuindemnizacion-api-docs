---
sidebar_position: 10
---

# Obtener información del cliente

Para un cliente retorna su información 

## URL

```
GET /documents/client-info/{client_id}
```

### Parámetros URL

Nombre | Tipo |  Comentarios 
--- | --- | --- | 
`client_id` | _int_ | Identificador del cliente. Obligatorio

### Ejemplo

```shell
curl --location --request GET 'https://calculatuindemnizacion.es/api/documents/client-info/{client_id}'  \
--header 'Authorization: Bearer {access_token}'
```

:::note Nota
En la llamada anterior se debe sustituir `{access_token}` e `{id}` por los valores del **_access_token_**, e **id** real
:::

## Respuesta correcta

La respuesta retorna los siguientes valores:

Nombre | Tipo | Comentarios 
--- | --- | --- |
`id` | _int_ | Identificador del cliente
`code` | _string_ | ID interno
`name` | _string_ | Nombre completo del cliente
`email` | _string_ | Email del cliente
`phone` | _string_ | Teléfono del cliente
`shortlink_url` | _string_ | URL al shortlink del cliente o _null_ si no tiene
`shortlink_expiration_date` | _bool_ | Fecha de expiración del shorlink en formato _YYYY-MM-DD HH:mm:ss_ o _null_ si no tiene shortlink
`profile_url` | _string_ | URL de la ficha de cliente

Por ejemplo:

```json title="Status: 200 Ok"
{
    "id": 70,
    "name": "John Doe",
    "email": "john.doe@email.net",
    "phone": "+34600123456",
    "shortlink_url": "https://bit.ly/s67icyCc",
    "shortlink_expiration_date": "2022-08-17 22:38:35",
    "profile_url": "https://calculatuindemnizacion.es/clients/70/show"
}
```

## Respuesta incorrecta

Por ejemplo:

```json title="Status: 404 Not found"
{
    "message": "Client not found"
}
```