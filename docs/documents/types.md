---
sidebar_position: 3
---

# Tipos de documento

Esta acción retorna los tipos de documento disponibles

## URL

```
GET /documents/types
```

### Parámetros GET

La acción no tiene parámetros

### Ejemplo

```shell
curl --location --request GET 'https://calculatuindemnizacion.es/api/documents/types'  \
--header 'Authorization: Bearer {access_token}'
```

:::note Nota
En la llamada anterior se debe sustituir `{access_token}` por el valor de **_access_token_** real
:::

## Respuesta correcta

La respuesta retorna los siguientes valores:

Nombre | | Tipo |  Comentarios 
--- | --- | --- | --- |
`types` | | _array_ | Lista de objetos con siguientes campos:
. | `id` | _int_ | Identificador del documento
. | `name` | _string_ | Nombre del tipo de documento


Por ejemplo:

```json title="Status: 200 Ok"
{
    "types": [
        {
            "id": 1,
            "name": "Designa firmada CTI"
        },
        {
            "id": 2,
            "name": "Informe de Urgencias"
        },

    ]
}
```

