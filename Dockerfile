FROM node:20

WORKDIR /foodOdering 

COPY . .

RUN yarn install

# RUN yarn run build

# RUN yarn start

CMD ["yarn","run", "dev"]
