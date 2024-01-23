# Weather Balloon Diary API

Proyecto ficticio desarrollado para aprender de Node.js con express y TypeScript.

## Formato de Diario

El formato para agregar nuevos diarios es el siguiente:

```json
{
  "date": "22/jan/2024",
  "weather": "sunny",
  "visibility": "great",
  "comment": "Today it's a beautiful day, the moon shines, and the sky has no clouds."
}
```

Asegúrate de incluir la fecha, condiciones meteorológicas, visibilidad y un comentario descriptivo al agregar un nuevo diario.

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

### Obtener diario por ID de comentario
```http
GET /comment/:id
```
Este endpoint devuelve un diario basado en el ID del comentario proporcionado en la URL.

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
        "date": "2024-01-22",
        "weather": "Sunny",
        "visibility": "Great",
        "comment": "Great weather for ballooning!"
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
    "date": "2024-01-23",
    "weather": "Partly Cloudy",
    "visibility": "Good",
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
    "date": "2024-01-24",
    "weather": "Rainy",
    "visibility": "Limited",
    "comment": "Postponed the flight due to rain."
}
```
Respuesta exitosa:
```json
{
    "id": 3,
    "date": "2024-01-24",
    "weather": "Rainy",
    "visibility": "Limited",
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
    "date": "2024-01-25",
    "weather": "Windy",
    "visibility": "Moderate",
    "comment": "Challenging flight with strong winds."
}
```

## Contribuciones
¡Las contribuciones son bienvenidas! Si encuentras algún problema o tienes ideas para mejorar la API, no dudes en abrir un problema o enviar una solicitud de extracción.

Disfruta de la API de Diarios para Pilotos de Globo Aerostático! 🎈