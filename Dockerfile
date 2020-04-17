# What image do you want to start building on?
FROM node:latest

ARG NEW_RELIC_KEY
ARG DB_CONNECTION
ARG DB_DB
ARG DB_USER
ARG DB_PW
ARG NODE_ENV

# Make a folder in your image where your app's source code can live
RUN mkdir -p /src/app

# Tell your container where your app's source code will live
WORKDIR /src/app

# What source code do you want to copy, and where to put it?
COPY . /src/app

# Does your app have any dependencies that should be installed?
RUN npm install

EXPOSE 80

ENV NEW_RELIC_KEY="${NEW_RELIC_KEY}"
ENV DB_CONNECTION="${DB_CONNECTION}"
ENV DB_DB="${DB_DB}"
ENV DB_USER="${DB_USER}"
ENV DB_PW="${DB_PW}"
ENV NODE_ENV="${NODE_ENV}"

# How do you start your app?
CMD [ "npm", "start" ]