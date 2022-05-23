---
sidebar_position: 5
---

# Validar documento

Marcar un documento con validado, especificando un tipo de documento.

## URL

```
PUT /documents/validate
```

### Parámetros PUT

Nombre | Tipo |  Comentarios 
--- | --- | --- | 
`id` | _int_ | Identificador del documento. Obligatorio
`type` | _int_ | Tipo de documento. Obligatorio


### Ejemplo

```shell
curl --location --request PUT 'https://calculatuindemnizacion.es/api/documents/validate'  \
--header 'Authorization: Bearer {access_token}' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'id={id}' \
--data-urlencode 'type={type}'
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