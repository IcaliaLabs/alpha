FROM node:7.6
MAINTAINER Icalia Labs <weare@icalialabs.com>

WORKDIR /usr/src/app

# Clean up un-needed files:
RUN rm -rf .dockerignore Dockerfile tmp/cache/* tmp/pids/* log/* docker-compose.yml *.env .env node_modules/


RUN apt-get update && apt-get install -y curl apt-transport-https && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install -y yarn

ADD . /usr/src/app

RUN yarn install && \
    npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
