FROM node:10
LABEL maintainer "KETI AIRC sankim <kimsan0622@keti.re.kr>"

ENV EXPOSE_PORT=3000

WORKDIR /usr/src/app

# npm package json
COPY package*.json ./

# install npm packages which are indicated in package.json
RUN npm install

# copy all the files in current directory to working directory in container
COPY . .

# expose npm
EXPOSE ${EXPOSE_PORT}

# run npm
CMD [ "npm", "start" ]

