# Etapa 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Servidor Nginx
FROM nginx:stable-alpine

# Elimina el contenido default
RUN rm -rf /usr/share/nginx/html/*

# Copia el build
COPY --from=builder /app/dist /usr/share/nginx/html

# Expone puerto 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]