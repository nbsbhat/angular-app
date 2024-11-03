
FROM node:18 AS base

RUN mkdir -p /home/ec2-user/nodeapp
# RUN chown -R ec2-user:ec2-user /home/ec2-user/nodeapp
# USER ec2-user
WORKDIR /home/ec2-user/nodeapp
COPY package*.json ./
RUN npm install --only=production
COPY . .
EXPOSE 8000


FROM base as dev
ENV NODE_ENV development
# USER ec2-user
# RUN npm install
# COPY . .
CMD ["npm", "run", "dev"]


FROM base as prod
ENV NODE_ENV production
CMD ["node", "server.js"]


FROM base as test
ENV NODE_ENV test
# USER ec2-user
# RUN npm install --only=production
# COPY . .
RUN npm run test
