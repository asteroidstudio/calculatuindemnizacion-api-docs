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
. | `url` | _string_ | URL pública temporal para previsualizar documento
. | `preview_url` | _string_ | URL privada para previsualizar documento
. | `download_url` | _string_ | URL privada para descargar documento
. | `filename` | _string_ | Nombre del documento
. | `validated` | _bool_ | Si el documento ha sido validado
. | `processed` | _bool_ | Si el documento está disponible para descargar
. | `used` | _bool_ | Si el documento ha sido usado para generar otro documento
. | `created_at` | _string_ | Fecha de creación del documento en formato _YYYY-MM-DD HH:mm:ss_
. | `updated_at` | _string_ | Fecha de última modificación del documento en formato _YYYY-MM-DD HH:mm:ss_
. | `uploaded_by` | _string_ | Nombre de la persona que ha subido el documento
. | `type_id` | _int_ | Id del tipo de documento
. | `type_name` | _string_ | Tipo de documento
. | `description` | _string_ | Descripción


Por ejemplo:

```json title="Status: 200 Ok"
{
    "documents": [
        {
            "id": 562,
            "url": "https://calculatuindemnizacion.es/documents/562/preview?tk=123645",
            "preview_url": "https://calculatuindemnizacion.es/documents/562/preview",
            "download_url": "https://calculatuindemnizacion.es/documents/562/download",
            "filename": "cats.pdf",            
            "validated": true,
            "processed": true,
            "used": false,
            "created_at": "2022-02-17 15:57:20",
            "updated_at": "2022-02-17 15:57:20",
            "uploaded_by": "John Doe",
            "type_id": 1,
            "type_name": "Designa Firamda",
            "description": "Lorem ipsum dolor sit amet"
        },
        {
            "id": 564, 
            "url": "https://calculatuindemnizacion.es/documents/562/preview?tk=123f235",
            "preview_url": "https://calculatuindemnizacion.es/documents/564/preview",
            "download_url": "https://calculatuindemnizacion.es/documents/564/download",
            "filename": "dogs.pdf",
            "validated": false,
            "processed": true,
            "used": true,
            "created_at": "2022-02-17 16:46:39",
            "updated_at": "2022-02-17 16:46:39",
            "uploaded_by": "John Doe",
            "type_id": 1,
            "type_name": "Designa Firamda",
            "description": "Lorem ipsum dolor sit amet"
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