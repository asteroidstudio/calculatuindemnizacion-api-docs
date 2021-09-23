---
sidebar_position: 1
slug: /
---

# Introducción

La API de calculatuindemnización.es es un **servicio web restful** que permite a los desarrolladores acceder a los datos y las funcionalidades de la plataforma. 

## Entornos

Existen 2 entornos en la API: **_staging_** y **_production_**. El entorno **_staging_** se usa durante la fase de desarrollo y testeo. Es también donde se probarán las nuevas características de la API. El entorno **_production_** es el que se usa en fase de producción. 

Cada entorno tiene su propia URL base para acceder a la API:

* **_staging_**: https://staging.calculatuindemnizacion.es/api
* **_production_**: https://calculatuindemnizacion.es/api

:::note Nota
En los ejemplo utilizaremos la URL base de **_production_**, pero debe ser reemplazada por la del entorno que se quiera usar.
:::

## Estructura 

La API se estructura en varios módulos a los que pueden tener acceso los diferentes desarrolladores. 

Las acciones de un módulo tiene su propia URL, a las que se accede haciendo una petición **https** a la URL base del entorno al que queremos acceder, seguido de la URL de dicha acción. 

La respuesta de la API es en formato **_JSON_**. 

Si la respuesta de la petición es correcta se devolverá un [código de estado HTTP](https://httpstatuses.com/) **200**. 

Si la respuesta es incorrecta se devolverá un [código de estado HTTP](https://httpstatuses.com/) **4xx**, dependiendo del error. En el campo **message** de la respuesta, se proporciona más información acerca del error. 

Por ejemplo, accediendo a una acción inexistente:

```shell
curl --location --request GET 'https://calculatuindemnizacion.es/api/hello'
```

Se obtiene como respuesta

```json title="Status: 404 Not Found"
{
    "message": "Not Found"
}
```

