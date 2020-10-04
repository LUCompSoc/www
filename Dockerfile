# build stage
FROM node:12-alpine as build-stage
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

# production stage
FROM nginx:stable-alpine as production-stage
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
RUN chown nginx:nginx /usr/share/nginx/html -R
CMD ["nginx", "-g", "daemon off;"]
