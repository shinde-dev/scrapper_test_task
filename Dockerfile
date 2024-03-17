FROM node:10.15.3

WORKDIR /home/app

COPY . /home/app

RUN cd /home/app

RUN npm install
