#  MongoDB Connection task

## Introduction

Welcome to the documentation for the ** MongoDB Connection task**. This project aims to provide a simple and serverless-friendly way to connect to MongoDB using Mongoose.

## Installation

To install the project dependencies, follow these steps:

```bash
npm install
```
iam assume that your machine using ubuntu linux as an OS 
also see here `https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/`

local MongoDB instance may be like => mongodb://localhost:27017/your_localdb_name Adjust your_localdb_name to the name of your local database.

if u hate local db use mongo serverless DB

### MongoDB connection string is handled using the MONGO_URI environment variable. so in terminal:

Copy code
```bash 
export MONGO_URI='your_actual_connection_string'
export JWT_SECRET='your_jwt_Secret'
```

### Create a file named .env in the root of your project and add:
```
MONGO_URI=your_actual_connection_string
JWT_SECRET=your_jwt_secret
```
Make sure to add .env to your .gitignore file to avoid committing sensitive information.

## to run the project 
```bash
mongod
```
```bash
npm start
```
then you can do post, get requsets >>> read your console 
