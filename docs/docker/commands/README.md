## Build the docker image
- docker build .  
- The . is the path of the docker file. Right now it is present in the current working directory. 

## List of the docker images present in the docker
- docker image ls  

## Run the docker image
- docker run image_id     
- image_id is the id of the image in the docker

## List of docker process status
- docker ps
- process status running on the docker 

##  Stop the docker container
- docker stop image_name
- it will stop the docker container.

##  Run the image and listen to the 3000 port
- docker run -p 3000:3000 image_id
- access the webpage outside the container. here we are binding the container port 3000 with 3000 which provide the access to 
the webpage

##  Run the image in discrete mode
- docker run -d -p 3000:3000 image_id
- run the container in the detach mode will run the container in the background.

## Can we run single image in multiple container?
yes we can we just need to change the port. Becuase the image is isolated so they can run on the multiple container.
- docker run -p 3000:3000 image_id
- docker run -p 3001:3000 image_id
- docker run -p 3002:3000 image_id

## Remove the container 
- docker rm image_id

This will remove the container when we stop the container it will be done by the --rm option
- docker run -d --rm -p 3000:3000 image_id

It will give the custom name to the image
- docker run -d --rm --name "image_name" -p 3000:3000 image_id


docker build -t mywebapp:01 .
it will create the app wuth name webapp and version 

docker remove the image 
- docker rmi image_id

docker interactive way to runn the image
- docker run -it image-name
-it represents interactive terminal

## rename the docker image name
docker tag previous_image_name new_image_name

## docker pull of the image
docker pull image_name


## Docker Volume
docker run --rm -it -v volumne name:/container_name/ image_id 


## Bind mount
docker run -v 'path of the file and the folder which changing' image_name
the bind mount allow us to not to create the image multiple times during the development and show the chnages at the same time,