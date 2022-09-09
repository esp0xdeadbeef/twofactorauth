FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
ENV HOST 0.0.0.0
ENV NODE_OPTIONS --openssl-legacy-provider
RUN npm install
COPY ./ .
RUN sed -i 's|http://localhost:8090||g' src/store/index.js
RUN npm run build

FROM nginx as production-stage
COPY ./ngnix.conf /etc/nginx/nginx.conf
RUN mkdir /app
COPY --from=build-stage /app/dist /app
EXPOSE 8080:8080