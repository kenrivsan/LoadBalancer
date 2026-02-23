# Etapa 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Etapa 2: Servidor Nginx
FROM nginx:stable-alpine

# Elimina el contenido default
RUN rm -rf /usr/share/nginx/html/*

# Copia el build de Vite
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer puerto 80
EXPOSE 80

# Mantener nginx en foreground
CMD ["nginx", "-g", "daemon off;"]