---
sidebar_position: 20
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
`client_id` | _int_ | Identificador del cliente. Obligatorio

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

Nombre |  | Tipo | Comentarios 
--- | --- | --- | --- |
`documents` |  | _array_ | Lista de objetos con las siguientes campos:
. | `id` | _int_ | Identificador del documento
. | `url` | _string_ | URL para obtener/descargar documento
. | `validated` | _bool_ | Si el documento ha sido validado
. | `used` | _bool_ | Si el documento ha sido usado para generar otro documento
. | `created_at` | _string_ | Fecha de creación del documento en formato _YYYY-MM-DD HH:mm:ss_
. | `updated_at` | _string_ | Fecha de última modificación del documento en formato _YYYY-MM-DD HH:mm:ss_


Por ejemplo:

```json title="Status: 200 Ok"
{
    "documents": [
        {
            "id": 562,
            "url": "https://calculatuindemnizacion.es/documents/562/preview",
            "validated": true,
            "used": false,
            "created_at": "2022-02-17 15:57:20",
            "updated_at": "2022-02-17 15:57:20"
        },
        {
            "id": 564, 
            "url": "https://calculatuindemnizacion.es/documents/564/preview",
            "validated": false,
            "used": true,
            "created_at": "2022-02-17 16:46:39",
            "updated_at": "2022-02-17 16:46:39",
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