# AWS API Movie Streaming Service

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General Info

This project attempts to answer a simple question - what streaming service(s) provide a particular movie at a given time?
Many website provide this answer already, but the premise offers a good learning opportunities about APIs and CRUD functions.

A web scrapper utilizing Google's own [PuppeteerJS](https://pptr.dev/) scraps multiple website for relevant information regarding the movie. 
The JSON object containing said information connects to AWS API Gateway with a HTTP endpoint.
That information is then processed into DynamoDB - a NoSQL database.
A simple Vue app connects and performs simple queries on the same database.

Future plans include the following:
* Process several movie request with the web scrapper rather than just one at a time
* Implement a trigger that can update movie information monthly to keep up to date with changing streaming platforms and contracts
	
## Technologies
Project is created with:
* Puppeteer JS 
* Amazon Web Service (AWS)
* Vue
	
## Setup
The Vue app is hosted on Github pages for demo purposes.
Sample AWS Lambda functions are provided in the repo, but these files will need to be update to accommodate personal use and other projects. For PuppeteerJS, we encourage you to visit the [PuppeteerJS Github account](https://github.com/puppeteer/puppeteer) for more information and demonstrations.

Below is the standard Vue project setup.

## Vue setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
