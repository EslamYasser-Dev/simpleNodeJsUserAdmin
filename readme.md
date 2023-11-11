# Serverless MongoDB Connection task

## Introduction

Welcome to the documentation for the **Serverless MongoDB Connection task**. This project aims to provide a simple and serverless-friendly way to connect to MongoDB using Mongoose.

## Installation

To install the project dependencies, follow these steps:

```bash
npm install
```
### MongoDB connection string is handled using the MONGO_URI environment variable. so in terminal:

Copy code
```bash 
export MONGO_URI='your_actual_connection_string'
```

### in you project file create a new .env file.

copy this code inside it
```bash
MONGO_URI = your_actual_connection_string
```

### Create a file named .env in the root of your project and add:

MONGO_URI=your_actual_connection_string
Make sure to add .env to your .gitignore file to avoid committing sensitive information.

