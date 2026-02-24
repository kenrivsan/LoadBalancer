# LoadBalancer
Implementación de Balanceador de Carga con Nginx y Docker
En esta actividad se implementó una infraestructura compuesta por dos servidores web y un balanceador de carga utilizando Nginx. La infraestructura fue desplegada mediante Docker Compose, permitiendo levantar todos los servicios con un solo comando.
1. Instalación y Configuración Inicial
Se instaló Docker Engine y Docker Compose en el sistema operativo Ubuntu. Posteriormente, se configuró el entorno para permitir la ejecución de Docker sin utilizar sudo.
2. Creación de la Infraestructura
Se crearon dos servidores web utilizando la imagen oficial nginx:alpine. Cada servidor contiene un archivo index.html con un mensaje distintivo para identificar desde qué servidor se está respondiendo la solicitud.
Además, se configuró un tercer contenedor que funciona como balanceador de carga. Este utiliza Nginx y un bloque upstream para distribuir las solicitudes utilizando el algoritmo Round Robin (método por defecto de Nginx cuando existen múltiples servidores definidos).
3. Docker Compose
Toda la infraestructura fue orquestada mediante un archivo docker-compose.yml, permitiendo levantar los tres contenedores con el comando:
docker compose up -d
4. Verificación de Funcionamiento
Se verificó que los tres contenedores estuvieran en ejecución utilizando el comando docker ps.


<img width="825" height="162" alt="image" src="https://github.com/user-attachments/assets/c93bea3b-16e1-45ed-8d3f-b022542f9b4b" />
<img width="825" height="306" alt="image" src="https://github.com/user-attachments/assets/1f7d1501-0908-44f7-aaed-d7e877c30203" />
<img width="825" height="301" alt="image" src="https://github.com/user-attachments/assets/01e4247c-5057-4d38-8bbd-4aeabcdda179" />


