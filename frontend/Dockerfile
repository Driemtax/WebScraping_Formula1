FROM node:19-alpine

WORKDIR /frontend

COPY f1-frontend /frontend/

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]