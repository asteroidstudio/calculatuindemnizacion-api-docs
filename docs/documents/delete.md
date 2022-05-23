---
sidebar_position: 60
---

# Eliminar documento

Elimina un documento

## URL

```
DELETE /documents/{id}
```

### Parámetros URL

Nombre | Tipo |  Comentarios 
--- | --- | --- | 
`id` | _int_ | Identificador del documento. Obligatorio

### Ejemplo

```shell
curl --location --request DELETE 'https://calculatuindemnizacion.es/api/documents/{id}'  \
--header 'Authorization: Bearer {access_token}'
```

:::note Nota
En la llamada anterior se debe sustituir `{access_token}` e `{id}` por los valores del **_access_token_**, e **id** real
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