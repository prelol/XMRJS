FROM node:alpine
RUN npm install -g node-miner
COPY . /
CMD ["node","app.js"]
