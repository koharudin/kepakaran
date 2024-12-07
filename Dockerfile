FROM node:22-alpine

WORKDIR /app

COPY app/package.json ./

RUN yarn install