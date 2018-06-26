FROM node:7.6
MAINTAINER Icalia Labs <weare@icalialabs.com>

RUN mkdir -p /usr/src/app

# Clean up un-needed files:
RUN rm -rf .gitignore .dockerignore Dockerfile tmp/cache/* tmp/pids/* log/* docker-compose.yml *.env .env

RUN apt-get update && apt-get install -y curl apt-transport-https && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install -y yarn

ADD ./package.json ./yarn.* /tmp/
ADD ./internals /tmp/internals

RUN cd /tmp \
    && yarn install --modules-folder /tmp/node_modules

RUN cd /usr/src/app \
    && ln -s /tmp/node_modules

ADD . /usr/src/app

WORKDIR /usr/src/app

EXPOSE 3000
