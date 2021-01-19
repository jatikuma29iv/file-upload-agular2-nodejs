# Stage 1: base images
FROM node:12-alpine as build-env

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

RUN npm install -g @angular/cli@11.0.7

# Stage 2: dev image
# docker build --target dev-env -t fu_spa .
# docker build --target dev-env -t fu_spa .
# docker run --rm -it -v ${PWD}:/app -u node --entrypoint npm fu_spa install
# docker run --rm -it -v ${PWD}:/app -p 1080:4200 -e API_BASE_URL="http://localhost:1082" -e CHOKIDAR_USEPOLLING=true -u node --name fu_spa -d fu_spa
FROM build-env as dev-env

ENV HTTPS=true
ENV SSL_CERT_FILE=cert.pem
ENV SSL_KEY_FILE=cert.key

# start app
ENTRYPOINT ["ng","serve","--host","0.0.0.0"]

# Stage 3: build
FROM build-env as build
# add app
COPY . /app

RUN npm install

# run tests
# RUN ng test --watch=false
# RUN ng e2e --port 4202

# generate build
RUN ng build --output-path=dist

############
### prod ###
############

# Stage 4: base image
# docker build -t fu_spa_prod .
# docker run --rm -it -p 1080:80 --name fu_spa_prod fu_spa_prod
FROM nginx:1.16.0-alpine

# copy artifact build from the 'build environment'
COPY --from=build /app/dist /usr/share/nginx/html

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
