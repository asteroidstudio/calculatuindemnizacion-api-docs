---
sidebar_position: 45
---

# Subir documento

Subir un fichero como documento especificando un tipo de documento

## URL

```
POST /documents/upload
```

### Parámetros POST

Nombre | Tipo |  Comentarios 
--- | --- | --- | 
`client_id` | _int_ | Identificador del cliente. Obligatorio
`type` | _int_ | Tipo de documento. Obligatorio
`file` | _file_ | Fichero a subir. Formato jpg, png, pdf, doc, docx, xls, xlsx, msg. Tamaño máximo 12MB. Obligatorio

### Ejemplo

```shell
curl --location --request POST 'https://calculatuindemnizacion.es/api/documents/upload'  \
--header 'Authorization: Bearer {access_token}' \
--form 'client_id="{client_id}"'
--form 'type="{type}"' \
--form 'file=@{file}' \
```

:::note Nota
En la llamada anterior se debe sustituir `{access_token}`, `{client_id}`, etc, por los valores del **_access_token_**, **_client_id_**, etc, reales
:::

## Respuesta correcta

La respuesta retorna los siguientes valores del documento subido:

Nombre | Tipo | Comentarios 
--- | --- | --- |
`id` | _int_ | Identificador del documento
`url` | _string_ | URL para obtener/descargar documento
`validated` | _bool_ | Si el documento ha sido validado
`used` | _bool_ | Si el documento ha sido usado para generar otro documento
`created_at` | _string_ | Fecha de creación del documento en formato _YYYY-MM-DD HH:mm:ss_
`updated_at` | _string_ | Fecha de última modificación del documento en formato _YYYY-MM-DD HH:mm:ss_

Por ejemplo:

```json title="Status: 200 Ok"
{
    "id": 826,
    "url": "https://calculatuindemnizacion.es/documents/562/preview",
    "validated": true,
    "used": false,
    "created_at": "2022-05-23 18:28:57",
    "updated_at": "2022-05-23 18:28:57"
}
```

## Respuesta incorrecta

Si hay un error de validación de los parámetros POST, se retorna el código `422`:

```json title="Status: 422 Unprocessable Entity"
{
    "message": "The given data was invalid.",
    "errors": {
        "file": [
            "Fichero debe ser un archivo con formato: jpg, jpeg, png, pdf, doc, docx, xls, xlsx, msg."
        ]
    }
}
```