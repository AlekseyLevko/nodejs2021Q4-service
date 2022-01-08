FROM node:16.13.1-alpine3.15
WORKDIR /usr/app
COPY package*.json .
RUN npm install --no-optional
COPY . .
EXPOSE 4000
CMD [ "npm", "start" ]
