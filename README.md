En esta actividad se trabajó en la configuración de un flujo de despliegue continuo para una aplicación web desarrollada utilizando Vite y React. El objetivo principal fue dockerizar la aplicación y luego desplegarla en AWS Elastic Beanstalk utilizando GitHub Actions para automatizar el proceso.

1. Preparación del proyecto

Primero se creó una aplicación web utilizando Vite y React, y se configuró Tailwind CSS para mejorar el diseño de la interfaz.
Posteriormente, se creó un Dockerfile con el propósito de ejecutar la aplicación dentro de un contenedor Docker. Para servir la aplicación se utilizó Nginx, lo que permite entregar los archivos de la aplicación de forma eficiente.

2. Configuración del repositorio

Una vez preparada la aplicación, el proyecto se subió a GitHub. En el repositorio se organizó la estructura del proyecto incluyendo los archivos necesarios para el despliegue, entre ellos:
El código fuente de la aplicación
El Dockerfile para construir la imagen del contenedor
La configuración de GitHub Actions para automatizar el proceso de despliegue

3. Creación del entorno en AWS Elastic Beanstalk

Después se procedió a crear un environment en AWS Elastic Beanstalk. Para este entorno se seleccionó la plataforma:
Docker running on 64bit Amazon Linux 2
Esta configuración permite que Elastic Beanstalk ejecute directamente contenedores Docker, lo cual facilita el despliegue de la aplicación dentro de la infraestructura de AWS.

4. Configuración del pipeline con GitHub Actions

Para automatizar el despliegue, se creó un workflow llamado deploy.yml dentro de la carpeta .github/workflows.
Este pipeline se encarga de realizar varias tareas automáticamente cada vez que se hacen cambios en el repositorio:
Descargar el código del repositorio
Construir la imagen Docker de la aplicación
Generar el archivo Dockerrun.aws.json
Empaquetar los archivos necesarios en un deploy.zip
Desplegar la aplicación en Elastic Beanstalk

5. Generación del archivo Dockerrun.aws.json

Dentro del pipeline se genera automáticamente el archivo Dockerrun.aws.json, el cual es utilizado por Elastic Beanstalk para saber qué imagen Docker debe ejecutar y qué puerto debe utilizar para exponer la aplicación.

6. Pruebas de despliegue

Durante las pruebas de despliegue surgieron algunos errores relacionados con:
Uso de una versión incorrecta de Dockerrun.aws.json
Configuración incorrecta del entorno (ECS en lugar de Docker)
Algunos errores dentro del pipeline de GitHub Actions
Estos problemas se fueron identificando y corrigiendo durante el proceso.
