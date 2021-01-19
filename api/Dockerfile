# Stage 1: base images
FROM node:12-alpine as build-env

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Stage 2: dev image
# docker build --target dev-env -t fu_spa .
FROM build-env as dev-env

ENV HTTPS=true
ENV SSL_CERT_FILE=cert.pem
ENV SSL_KEY_FILE=cert.key

ENTRYPOINT ["node","server.js"]
