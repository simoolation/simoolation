FROM node:10 AS build
COPY . .
WORKDIR /
RUN npm install gulp
RUN npm install --g gulp-cli
RUN npm install
RUN gulp -b . --gulpfile gulpfile.js clean:dist
RUN gulp -b . --gulpfile gulpfile.js build

FROM nginx:alpine
EXPOSE 80
COPY --from=build default.conf /etc/nginx/conf.d
COPY --from=build mime.types /etc/nginx/mime.types
COPY --from=build dist /usr/share/nginx/html
COPY --from=build favicon.ico /usr/share/nginx/html
COPY --from=build src/assets/js/toilet-paper.js /usr/share/nginx/html/assets/js
RUN ls -la /usr/share/nginx/html
