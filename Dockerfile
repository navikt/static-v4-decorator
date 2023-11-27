FROM node:20-alpine

RUN ln -fs /usr/share/zoneinfo/Europe/Oslo /etc/localtime
ENV NODE_ENV production
ENV CI=true

WORKDIR /app

COPY index.js ./
COPY static/ ./static
COPY package.json ./
COPY package-lock.json ./

RUN npm install
CMD ["node", "index.js"]

EXPOSE 8080
