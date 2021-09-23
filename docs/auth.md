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
--header 'Authorization: Bearer 012345abcdef'
```
:::note Nota
El **_access_token_** utilizado en el ejemplo anterior no existe realmente, es únicamente para ilustrar el ejemplo
:::

:::caution Alerta

Los **_access_token_** son diferentes para los entornos de **_staging_** y **_production_**

:::