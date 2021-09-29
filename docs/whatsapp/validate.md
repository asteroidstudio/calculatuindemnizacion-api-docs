---
sidebar_position: 1
---

# Validar cliente

Esta acción retorna el identificador del cliente asociado a un DNI y un número de teléfono

## URL

```
GET /whatsapp/clients/validate
```

### Parámetros GET

Nombre | Tipo |  Comentarios 
--- | --- | --- | 
**dni** | _string_ | DNI del cliente. Obligatorio
**phone** | _string_ | Número de teléfono del cliente. Obligatorio

### Ejemplo

```shell
curl --location --request GET 'https://calculatuindemnizacion.es/api/whatsapp/clients/validate?dni={dni}&phone={phone}'  \
--header 'Authorization: Bearer {access_token}'
```

:::note Nota
En la llamada anterior se debe sustituir `{access_token}`, `{dni}` y `{phone}` por los valores del **_access_token_**, **dni** y **phone** real
:::

## Respuesta correcta

La respuesta retorna los siguientes valores:

Nombre | Tipo |  Comentarios 
--- | --- | --- | 
**id** | _string_ | Identificador del usuario. Puede contener números y guión medio


Por ejemplo:

```json title="Status: 200 Ok"
{
    "id": "24870-2"
}
```

## Respuesta incorrecta

Por ejemplo:

```json title="Status: 404 Not found"
{
    "message": "Client not found"
}
```