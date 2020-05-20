TASK-O-MATIC API
===
A proof of concept task mangment API.

## SECURITY CONCERNS
Unless this application is protected with an HTTPS connection the requests and responses are subject to man in the middle attacks and snooping.
In production the application should be deployed behind an HTTPS-Proxy server to prevent misuse.

## DEVELOPMENAT SETUP
### Access the source
Run the following commands.
1. `git clone https://github.com/slugbyte/taskomatic-api.git` will download the source
1. `npm install` will install the depependent node modules.
### Setup extenral dependencies 
* Redis server

### Configure the enviroment
* Create a `.env` file in the root directory of this repo based on the following example file.

``` bash
PORT=3000
CORS_ORIGIN='localhost,https://taskomatic.slugbyte.com' //comma seporated list
APP_SECRET='THIS IS VERY SECRET' // in production must use a RSA-KEY
REDIS_URI=""
DEBUG=1
```

### Run the development test
The following commands will execute the test suite.
* `npm run test` -- this command will run the test-suit one time.
* `npm run test-watch` -- this command will efictavly continuly  watch for changes to the files in this repo, and automaticly re-run the test-suit after any change.

### Start the server
Run the following command to boot the server.
* `npm run start` -- this command will boot the server.

## MODELS
Below are descriptions of the taskomatic data models.

### USER
Below is a list of the User-Model properties, along with their descriptions.  
* `id`
* `email`
* `username`
* `firstName`
* `lastName`
* `passwordHash`
* `authenticationTokenSeed`

### TASK
Below is a list of the Task-Model properties, along with their descriptions.  
* `id`
* `userID`
* `description`
* `completed`
* `timestamp`

## API Interface 
The Taskomatic API implaments a REST interface. Each endpoint allows an http-client to create, read, update, and delete (CRUD) a model using HTTP the appropiate HTTP methods. 

## AUTH
The `/auth` endpoint is used to manage the CRUD opperations of user model, as well as generate authentiation tokens.

### POST /auth
Create a user and recieve an authentication token.
#### Requirements
* Make a HTTP POST request to `/auth` 
* Set the HTTP header `Content-Type` to `application/json`
* Attach JSON to the body of the request with the following data.
``` json
{
  "email": "example@example.com",
  "username": "example_user",
  "firstName": "Nancy",
  "lastName": "Doe",
  "password": "password1234"
}
```

#### Response
The server will return a json object that contains an authentication token, that can be used to make task requests.
``` json
{
  "authToken": "ZXhhbXBsZSB0b2tlbiBleGFtcGxlIHRva2VuIGV4YW1wbGUgdG9rZW4K",
}
```

### GET /auth
Retrieve an authentication token for an existing user. 
#### Requirements
#### Response

### UPDATE /auth
Update a users credientials.
#### Requirements
#### Response

### DELETE /auth
Delete a user and all of their content.
#### Requirements
#### Response


## TASK 
The `task` endpoint is used to manage the CRUD opperations of the task model.
### POST /task
#### Requirements
#### Response

### GET /task
#### Requirements
#### Response

### GET /task/:id
#### Requirements
#### Response

### UPDATE /task/:id
#### Requirements
#### Response

### DELETE /task/:id
#### Requirements
#### Response


## RANDOM TASK
The `/randtask` endpoint is used to manage the CRUD opperations of the task model, with the added side-effect that it will automaticly be marked as completed after a random interval within 10 seconds.
### POST /randtask
#### Requirements
#### Response

### GET /randtask
#### Requirements
#### Response

### GET /randtask/:id
#### Requirements
#### Response

### UPDATE /randtask/:id
#### Requirements
#### Response

### DELETE /randtask/:id
#### Requirements
#### Response

## Changelog
0.1.0 -- init repo

## Todo Roadmap
0.1.1 -- mvp express server
0.1.2 -- connect redis
0.1.3 -- user model
0.1.4 -- auth routes
0.1.5 -- task model
0.1.6 -- task routes
0.1.7 -- randtask routes
1.0.0 -- GET JOB