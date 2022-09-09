FROM node:latest
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
ENV HOST 0.0.0.0
EXPOSE 80:8090
CMD ["npm", "start"]