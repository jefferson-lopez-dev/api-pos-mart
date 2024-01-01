FROM node:18-bullseye

WORKDIR /api-pos-martpos

COPY . .

RUN npm install
RUN npm run tsc

EXPOSE 3000

CMD [ "npm", "start" ]





