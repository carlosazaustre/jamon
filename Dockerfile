FROM node:10

ENV TINI_VERSION v0.18.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini

COPY package.json /usr/src/
WORKDIR /usr/src
RUN npm install

COPY . /usr/src/

ENTRYPOINT [ "/tini", "--"]
CMD ["npm", "run", "build"]
