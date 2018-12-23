FROM node:10

COPY [".", "/usr/src"]

WORKDIR /usr/src

RUN npm install

CMD ["bash"]
