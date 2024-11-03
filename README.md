"# node-app" 


https://github.com/nbsbhat/node-app.git

git remote add origin https://github.com/nbsbhat/webapp.git
git branch -M main
git push -u origin main
git push -u origin main



mkdir node-app
cd node-app
npm init -y
// npm install @angular/cli@14
// npm new client


docker build -t nbhat74/node-api-server:latest
docker run -p 8000:8000 -d nbhat74/node-api-server:latest
docker ps
docker kill <process-name>

// build and run tests while developing locally (leaving the image)
docker compose run server npm run test
// run tests when building
docker build -t node-api-server-test --progress=plain --no-cache --target test .


// build the docker image
docker build -t nbhat74/node-app .
// publish to hub
docker push nbhat74/node-app

// run the docker container
docker run --name nodeapp -p 8000:8000 -d nbhat74/node-app
// stop the container
docker stop <id>
// remove (all) stopped containers
docker system prune -a
// pull docker containers
docker pull nbhat74/<app>
