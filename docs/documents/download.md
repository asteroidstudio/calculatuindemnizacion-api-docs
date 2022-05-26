---
sidebar_position: 47
---

# Descargar documento

Obtener los bytes del documento seleccionado

## URL

```
GET /documents/download/{id}
```

### Parámetros URL

Nombre | Tipo |  Comentarios 
--- | --- | --- | 
`id` | _int_ | Identificador del documento. Obligatorio

### Ejemplo

```shell
curl --location --request GET 'https://calculatuindemnizacion.es/api/documents/download/{id}'  \
--header 'Authorization: Bearer {access_token}'
```

:::note Nota
En la llamada anterior se debe sustituir `{access_token}` e `{id}` por los valores del **_access_token_**, e **id** real
:::

## Respuesta correcta

A diferencia de la mayoría de llamadas, la respuesta correcta no tendrá formato json, sinó que directamente se retornará el contenido binario del documento con `Status: 200 Ok`

## Respuesta incorrecta

Por ejemplo:

```json title="Status: 404 Not found"
{
    "message": "Document not found"
}
```