---
sidebar_position: 2
---

# Autenticación

Para utilizar la API como desarrollador, se necesita un **_access_token_** con el que realizar las peticiones. 

Cada **_access_token_** proporciona acceso a uno o varios módulos de la API.

El **_access_token_** se debe añadir a las peticiones con la siguiente cabecera: 

```
Authorization: Bearer {access_token}
```

Por ejemplo:

```shell
curl --location --request GET 'https://calculatuindemnizacion.es/api/me' \
--header 'Authorization: Bearer {access_token}'
```
:::note Nota
En la llamada anterior se debe sustituir `{access_token}` por el valor del **_access_token_** real
:::

:::caution Alerta

Los **_access_token_** son diferentes para los entornos de **_staging_** y **_production_**

:::