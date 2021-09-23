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
--header 'Authorization: Bearer 012345abcdef'
```

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