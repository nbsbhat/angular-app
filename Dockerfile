# Stage 1: Build Angular App
FROM node:18 AS base
WORKDIR /usr/src/app
EXPOSE 8000
COPY package*.json ./
RUN npm install --only=production


FROM base as dev
USER node
COPY . .
CMD ["npm", "run", "dev"]


FROM base as prod
USER node
COPY . .
CMD ["npm", "server.js"]


FROM base as test
ENV NODE_ENV test
USER node
COPY . .
RUN npm run test
