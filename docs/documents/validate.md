---
sidebar_position: 50
---

# Validar documento

Marcar un documento con validado, especificando un tipo de documento.

## URL

```
POST /documents/validate
```

### Parámetros PUT

Nombre | Tipo |  Comentarios 
--- | --- | --- | 
`id` | _int_ | Identificador del documento. Obligatorio
`type` | _int_ | Tipo de documento. Obligatorio


### Ejemplo

```shell
curl --location --request POST 'https://calculatuindemnizacion.es/api/documents/validate'  \
--header 'Authorization: Bearer {access_token}' \
--form 'id="{id}"' \
--form 'type="{type}"'
```

:::note Nota
En la llamada anterior se debe sustituir `{access_token}`, `{id}` y `{type}` por los valores del **_access_token_**, **_id_** y **_type_** reales
:::

## Respuesta correcta

La respuesta no retorna valores

```json title="Status: 200 Ok"
{

}
```

## Respuesta incorrecta

Por ejemplo:

```json title="Status: 404 Not found"
{
    "message": "Document not found"
}
```