FROM node:10.15.0-alpine

EXPOSE 3000
WORKDIR /app

COPY package.json yarn.lock /app/
RUN yarn --prod \
  && yarn cache clean

COPY *.js  /app/

CMD ["node", "index.js"]
