---
sidebar_position: 3
---

# Guardar documentos

Para un cliente se proporciona una lista de documentos que se guardan en la plataforma

## URL

```
POST /whatsapp/clients/{id}/documents/store
```

### Parámetros URL

Nombre | Tipo |  Comentarios 
--- | --- | --- | 
**id** | _string_ | Identificador del usuario. Puede contener números y guión medio. Obligatorio

### Parámetros POST

Nombre | Tipo |  Comentarios 
--- | --- | --- | 
**urls** | _string_ | Urls de los documentos separados por <code>&nbsp;\|&nbsp;</code>. Obligatorio. Por ejemplo: <code>ht<span>tps://</span>picsum.photos/id/10/640/400 \| ht<span>tps://</span>picsum.photos/id/1000/640/400</code>

### Ejemplo

```shell
curl --location --request POST 'https://calculatuindemnizacion.es/api/whatsapp/clients/{id}/documents/store' \
--form 'urls="{urls}"' \
--header 'Authorization: Bearer {access_token}'
```

:::note Nota
En la llamada anterior se debe sustituir `{access_token}`, `{id}` y `{urls}` por los valores del **_access_token_**, **id** y **urls** real
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
    "message": "Client not found"
}
```