FROM node:10 AS build
COPY . ./web-application-landing-page
WORKDIR /web-application-landing-page
RUN npm install --g gulp-cli
RUN npm install
RUN gulp -b . --gulpfile gulpfile.js clean:dist
RUN gulp -b . --gulpfile gulpfile.js build

FROM nginx:alpine
EXPOSE 80
COPY --from=build web-application-landing-page/default.conf /etc/nginx/conf.d
COPY --from=build web-application-landing-page/mime.types /etc/nginx/mime.types
COPY --from=build web-application-landing-page/dist /usr/share/nginx/html
COPY --from=build web-application-landing-page/favicon.ico /usr/share/nginx/html
COPY --from=build web-application-landing-page/src/assets/js/toilet-paper.js /usr/share/nginx/html/assets/js
RUN ls -la /usr/share/nginx/html
