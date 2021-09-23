---
sidebar_position: 1
---

# Validar cliente

Esta acción retorna el identificador del cliente asociado a un DNI y un número de teléfono

## URL

```
GET /whatsapp/clients/validate
```

### Parámetros

Nombre | Tipo |  Comentarios 
--- | --- | --- | 
**dni** | _string_ | DNI del cliente. Obligatorio
**phone** | _string_ | Número de teléfono del cliente. Obligatorio

### Ejemplo:

```shell
curl --location --request GET 'https://calculatuindemnizacion.es/api/whatsapp/validate?dni=123456789A&phone=600000000'  \
--header 'Authorization: Bearer 012345abcdef'
```

## Respuesta correcta

La respuesta retorna los siguientes valores:

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