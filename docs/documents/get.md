---
sidebar_position: 2
---

# Obtener documentos

Para un cliente retorna sus documentos (validados y no validados)

## URL

```
GET /documents/get-by-client/{client_id}
```

### Parámetros URL

Nombre | Tipo |  Comentarios 
--- | --- | --- | 
**client_id** | _int_ | Identificador del cliente. Obligatorio

### Ejemplo

```shell
curl --location --request GET 'https://calculatuindemnizacion.es/api/documents/get-by-client/{client_id}'  \
--header 'Authorization: Bearer {access_token}'
```

:::note Nota
En la llamada anterior se debe sustituir `{access_token}` e `{id}` por los valores del **_access_token_**, e **id** real
:::

## Respuesta correcta

La respuesta retorna los siguientes valores:

Nombre | Tipo |  Comentarios 
--- | --- | --- | 
**documents** | _array_ | Lista de objetos con las claves **id**, **url** y **validated**

Por ejemplo:

```json title="Status: 200 Ok"
{
    "documents": [
        {
            "id": 562,
            "url": "https://calculatuindemnizacion.es/documents/562/preview",
            "validated": true
        },
        {
            "id": 564, 
            "url": "https://calculatuindemnizacion.es/documents/564/preview",
            "validated": false
        },

    ]
}
```

## Respuesta incorrecta

Por ejemplo:

```json title="Status: 404 Not found"
{
    "message": "Client not found"
}
```