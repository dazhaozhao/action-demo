FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run docs:build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/docs/.vitepress/dist /app
COPY nginx.conf /etc/nginx/nginx.conf