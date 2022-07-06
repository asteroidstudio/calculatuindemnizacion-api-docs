---
sidebar_position: 48
---

# Tags de consulta

Esta acción retorna los tipos de documento disponibles

## URL

```
GET /clients/query-tags
```

### Parámetros GET

La acción no tiene parámetros

### Ejemplo

```shell
curl --location --request GET 'https://calculatuindemnizacion.es/api/clients/query-tags'  \
--header 'Authorization: Bearer {access_token}'
```

:::note Nota
En la llamada anterior se debe sustituir `{access_token}` por el valor de **_access_token_** real
:::

## Respuesta correcta

La respuesta retorna los siguientes valores:

Nombre | | Tipo |  Comentarios 
--- | --- | --- | --- |
`tags` | | _array_ | Lista de objetos con siguientes campos:
. | `id` | _int_ | Identificador del tag
. | `name` | _string_ | Nombre del tag


Por ejemplo:

```json title="Status: 200 Ok"
{
    "tags": [
        {
            "id": 1,
            "name": "Pendiente"
        },
        {
            "id": 15,
            "name": "Designa Firmada"
        },

    ]
}
```

