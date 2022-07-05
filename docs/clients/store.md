---
sidebar_position: 45
---

# Alta cliente

Crear un nuevo cliente

## URL

```
POST /clients
```

### Parámetros POST

Nombre | Tipo |  Comentarios 
--- | --- | --- | 
`name` | _string_ | Nombre del cliente. Obligatorio
`last_name` | _string_ | Apellidos del cliente. Opcional
`email` | _string_ | Email del cliente. Debe ser único. Obligatorio
`phone` | _string_ | Teléfono. Obligatorio
`dni` | _string_ | DNI/NIF del cliente. Opcional
`address` | _string_ | Dirección del cliente. Opcional
`city` | _string_ | Población del cliente. Opcional
`cp` | _string_ | Código Postal del cliente. Opcional
`score`| _int_ | Valoración de la calculadora. Opcional

### Ejemplo

```shell
curl --location --request POST 'https://calculatuindemnizacion.es/api/clients'  \
--header 'Authorization: Bearer {access_token}' \
--form 'name="{name}"'
--form 'email="{email}"' \
--form 'phone="{phone}"' \
```

:::note Nota
En la llamada anterior se debe sustituir `{access_token}`, `{name}`, etc, por los valores del **_access_token_**, **_name_**, etc, reales
:::

## Respuesta correcta

La respuesta retorna el identificador del cliente creado:

Nombre | Tipo | Comentarios 
--- | --- | --- |
`id` | _int_ | Identificador del cliente

Por ejemplo:

```json title="Status: 200 Ok"
{
    "id": 562    
}
```

## Respuesta incorrecta

Si hay un error de validación de los parámetros POST, se retorna el código `422`:

```json title="Status: 422 Unprocessable Entity"
{
    "message": "The given data was invalid.",
    "errors": {
        "name": [
            "Nombre es obligatorio"
        ]
    }
}
```