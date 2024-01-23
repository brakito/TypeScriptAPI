# Weather Balloon Diary API

Proyecto ficticio desarrollado para aprender de Node.js con express y TypeScript.

## Endpoints

### Obtener todos los diarios
```http
GET /
```
Este endpoint devuelve información segura sobre todos los diarios registrados.

### Obtener un diario por ID
```http
GET /:id
```
Este endpoint devuelve un diario específico según el ID proporcionado en la URL. Sin embargo, ten en cuenta que los comentarios no se muestran directamente en este endpoint por considerarse información sensible. Para obtener el comentario asociado a un diario, utiliza el siguiente endpoint específico:

### Obtener comentario por ID
```http
GET /comment/:id
```
Este endpoint devuelve el comentario asociado al diario identificado por el ID proporcionado en la URL.

### Crear un nuevo diario
```http
POST /
```
Este endpoint permite la creación de un nuevo diario. Se espera un cuerpo de solicitud en formato JSON con la información del nuevo diario.

El formato para agregar nuevos diarios es el siguiente:

```json
{
  "date": "22/jan/2024",
  "weather": "sunny",
  "visibility": "great",
  "comment": "Today it's a beautiful day, the moon shines, and the sky has no clouds."
}
```

algunos parametros estan tipados usando un enum como:
- weather que solo puede tener los valores: sunny,rainy,cloudy,windy,stormy.
- visibility que solo puede tener los valores: great, good, ok, poor.

## Ejemplo de Uso

### Obtener todos los diarios
```http
GET /
```
Respuesta exitosa:
```json
[
    {
        "id": 1,
        "date": "22/jan/2024",
        "weather": "sunny",
        "visibility": "great",
        "comment": "great weather for ballooning!"
    },
    // Otros diarios...
]
```

### Obtener un diario por ID
```http
GET /2
```
Respuesta exitosa:
```json
{
    "id": 2,
    "date": "23/jan/2024",
    "weather": "cloudy",
    "visibility": "good",
    "comment": "Enjoyed a peaceful flight today."
}
```

### Crear un nuevo diario
```http
POST /
```
Cuerpo de solicitud:
```json
{
    "date": "24/jan/2024",
    "weather": "rainy",
    "visibility": "ok",
    "comment": "Postponed the flight due to rain."
}
```
Respuesta exitosa:
```json
{
    "id": 3,
    "date": "24/jan/2024",
    "weather": "rainy",
    "visibility": "ok",
    "comment": "Postponed the flight due to rain."
}
```

### Obtener diario por ID de comentario
```http
GET /comment/5
```
Respuesta exitosa:
```json
{
    "id": 4,
    "date": "25/jan/2024",
    "weather": "windy",
    "visibility": "poor",
    "comment": "Challenging flight with strong winds."
}
```