Assignment 04 – Aplicación Dockerizada con CI/CD

En esta actividad se desarrolló una aplicación web sencilla utilizando Vite con React y TypeScript. El objetivo principal fue dockerizar la aplicación y automatizar el proceso de construcción y publicación de la imagen en Docker Hub utilizando GitHub Actions. El proyecto implementa un flujo de integración continua (CI) donde cada commit genera automáticamente una nueva imagen Docker.

Tecnologías utilizadas
- Vite
- React
- TypeScript
- Docker
- Nginx
- GitHub Actions
- Docker Hub

Desarrollo de la aplicación
Se creó una aplicación web estática con una interfaz gráfica sencilla tipo dashboard para gestionar gastos. La aplicación fue desarrollada con Vite, React y TypeScript, permitiendo una interfaz rápida y moderna.

Dockerización de la aplicación
La aplicación fue dockerizada utilizando un Dockerfile con multi-stage build. En la primera etapa se compila la aplicación utilizando Node.js y en la segunda etapa se sirve el contenido generado utilizando Nginx.


Automatización con GitHub Actions
Se configuró un workflow dentro de la carpeta .github/workflows que se ejecuta automáticamente en cada push al repositorio. Este workflow realiza las siguientes acciones:
- Descargar el código del repositorio.
- Construir la imagen Docker de la aplicación.
- Iniciar sesión en Docker Hub utilizando credenciales almacenadas como Secrets.
- Subir la imagen generada al repositorio de Docker Hub.
- Asignar automáticamente los tags 'latest' y el SHA del commit.
  
Imagen publicada en Docker Hub
La imagen generada se publica automáticamente en Docker Hub cada vez que se realiza un commit en el repositorio. Cada imagen tiene dos tags: 'latest' y el SHA del commit.


