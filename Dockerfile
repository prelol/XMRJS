FROM node:alpine
RUN npm install -g node-miner
CMD ["node","app.js"]
