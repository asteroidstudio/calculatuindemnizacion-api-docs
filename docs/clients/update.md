---
sidebar_position: 46
---

# Editar cliente

Editar los datos de cliente

## URL

```
POST /clients/{client_id}
```

### Parámetros POST

Nombre | Tipo |  Comentarios 
--- | --- | --- | 
`query_tag` | _int_ | Tag de la consulta. Se pueden consultar los valores de los tags en la acción [Tags de consulta](./query-tags). Obligatorio

### Ejemplo

```shell
curl --location --request POST 'https://calculatuindemnizacion.es/api/clients/{client_id}'  \
--header 'Authorization: Bearer {access_token}' \
--form 'query_tag="{query_tag}"'
```

:::note Nota
En la llamada anterior se debe sustituir `{access_token}`, `{name}`, etc, por los valores del **_access_token_**, **_name_**, etc, reales
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