FROM node:16

# App directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]