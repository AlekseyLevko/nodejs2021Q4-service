FROM node:12.20.0-alpine3.9
WORKDIR /usr/app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 4000
CMD [ "npm", "start" ]
