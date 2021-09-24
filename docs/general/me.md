---
sidebar_position: 1
---

# Mis datos

Esta acción retorna la información del desarrollador autenticado.

## URL

```
GET /me
```

### Parámetros

La acción no tiene parámetros

### Ejemplo:

```shell
curl --location --request GET 'https://calculatuindemnizacion.es/api/me' \
--header 'Authorization: Bearer {access_token}'
```

:::note Nota
En la llamada se debe sustituir `{access_token}` por el valor del **_access_token_** real
:::

## Respuesta correcta

La respuesta retorna los siguientes valores:

Nombre | Tipo |  Comentarios 
--- | --- | --- | 
**name** | _string_ | Nombre del desarollador



Por ejemplo:

```json title="Status: 200 Ok"
{
    "name": "John Doe"
}
```

## Respuesta incorrecta

Por ejemplo:

```json title="Status: 401 Unauthorized"
{
    "message": "Unauthenticated."
}
```