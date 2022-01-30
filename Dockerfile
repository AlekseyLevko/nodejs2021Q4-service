FROM node:16.13.1-alpine3.15
WORKDIR /usr/app
COPY package*.json .
RUN npm install --no-optional
COPY . .
EXPOSE ${PORT}
CMD [ "npm", "run", "start" ]
