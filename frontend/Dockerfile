FROM node:19-alpine

WORKDIR /frontend

COPY frontend/f1project /frontend/

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]