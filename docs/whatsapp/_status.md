---
sidebar_position: 2
---

# Estado de la reclamación

Para un cliente retorna el estado en que está la reclamación

## URL

```
GET /whatsapp/clients/{id}/status
```

### Parámetros URL

Nombre | Tipo |  Comentarios 
--- | --- | --- | 
**id** | _int_ | Identificador del usuario. Obligatorio

### Ejemplo

```shell
curl --location --request GET 'https://calculatuindemnizacion.es/api/whatsapp/clients/{id}/status'  \
--header 'Authorization: Bearer {access_token}'
```

:::note Nota
En la llamada anterior se debe sustituir `{access_token}` e `{id}` por los valores del **_access_token_**, e **id** real
:::

## Respuesta correcta

La respuesta retorna los siguientes valores:

:::danger TODO
:::


Nombre | Tipo |  Comentarios 
--- | --- | --- | 
**id** | _int_ | Identificador del cliente


Por ejemplo:

```json title="Status: 200 Ok"
{
    "id": 24870
}
```

## Respuesta incorrecta

Por ejemplo:

```json title="Status: 404 Not found"
{
    "message": "Client not found"
}
```