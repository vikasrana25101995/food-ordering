FROM node:20
install the node 20 version

FROM node
install the latest we will remove the version

---------------------------------------------------------------------------------

WORKDIR /foodOdering 
When the container will be create it will be empty because it is an isolated. 
To make the application store in a directory we need to create a directory
So this command will create the directory for the project.

---------------------------------------------------------------------------------

COPY . .
We need to copy the folder in the foodOrdering.
This will copy all the file in the woeking directory /foddOrdering
 
---------------------------------------------------------------------------------

EXPOSE 3000
we are exposing the port. It is optional.

---------------------------------------------------------------------------------

RUN yarn install
We have to install the node module first as the node module is not added in the project.
To make the node module in the container we have run this command.

---------------------------------------------------------------------------------

# RUN yarn run build

# RUN yarn start

CMD ["yarn","run", "dev"]

Running the command for the 
yarn run dev in the
---------------------------------------------------------------------------------
