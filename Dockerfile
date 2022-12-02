FROM node:16.16.0-alpine3.15
COPY . .
RUN npm -y install
CMD ["npm", "run", "start"]
