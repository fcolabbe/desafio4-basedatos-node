# Like Me (Parte I)

## Descripción del Proyecto

"Like Me" es una nueva red social en desarrollo que se enfoca en los likes de los posts emitidos por los usuarios. Este proyecto implementa la lógica básica para la creación de posts y la interacción de likes.

## Objetivo

Crear un servidor que proporcione rutas GET y POST para consultar y guardar posts en una base de datos PostgreSQL utilizando el paquete pg.

## Tecnologías Utilizadas

- Node.js
- Express
- PostgreSQL
- pg (paquete de Node.js para PostgreSQL)
- cors

## Configuración de la Base de Datos

Ejecuta las siguientes instrucciones SQL para crear la base de datos y la tabla necesaria:

```sql
CREATE DATABASE likeme;
CREATE TABLE posts (
  id SERIAL, 
  titulo VARCHAR(25), 
  img VARCHAR(1000),
  descripcion VARCHAR(255), 
  likes INT
);

## Requerimientos

Habilitar CORS en el servidor utilizando el paquete npm correspondiente.
Usar el paquete pg para conectarse e interactuar con la base de datos PostgreSQL.
Crear una ruta GET con Express para devolver los registros de la tabla posts.
Crear una ruta POST con Express que reciba y almacene un nuevo registro en la tabla posts.

## Instalación

Clona este repositorio
Instala las dependencias con npm install
Configura las variables de entorno para la conexión a la base de datos
Ejecuta el servidor con npm start

## Uso
El servidor se ejecutará en http://localhost:3000. Utiliza las rutas definidas para interactuar con la API:

GET /posts : Obtiene todos los posts
POST /posts : Crea un nuevo post

## Contribución
Las contribuciones son bienvenidas. Por favor, abre un issue para discutir los cambios propuestos antes de realizar un pull request.