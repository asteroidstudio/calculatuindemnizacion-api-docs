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
**id** | _string_ | Identificador del usuario. Puede contener números y guión medio. Obligatorio

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

Nombre | Tipo |  Comentarios 
--- | --- | --- | 
**status** | _string_ | Código de estado. Puede ser vacío o algún valor de entre los [códigos de estado](#status-codes) disponibles.

### Códigos de estado {#status-codes}

Los códigos disponibles son `RENUNCIA`, `DOCUMENTACION`, `SEGUIMIENTO_MEDICO`, `SERVICIOS_MEDICOS`, `NEGOCIANDO_CIA`, `PAGO_CIA`, `RECOBRO`, `SIN_CONFORMIDAD`, `CIERRE`, `VENIA`, `MONITORIO`, `FORENSE`, `JUDICIAL`

:::caution Aviso
El código puede tener valor **vacío** `""` si el cliente no está en ninguno de los estados disponibles
:::

Ejemplo (devuelve un código disponible):

```json title="Status: 200 Ok"
{
    "status": "RENUNCIA"
}
```

Ejemplo (devuelve vacío):

```json title="Status: 200 Ok"
{
    "status": ""
}
```

## Respuesta incorrecta

Por ejemplo:

```json title="Status: 404 Not found"
{
    "message": "Client not found"
}
```