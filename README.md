## REST API with Node.js, Express, MongoDB & JWT

This project is a REST API built with Node.js and Express. It uses MongoDB for data storage, implements JWT (JSON Web Tokens) for authentication, and supports login functionality. The API includes CRUD (Create, Read, Update, Delete) operations, route protection, and comprehensive error handling.

## Project Overview

This API can be used as a backend service for a web or mobile application. It provides the necessary infrastructure for user login, access to protected routes, and CRUD operations.

## Features

. Node.js and Express.js based REST API

. MongoDB for data storage

. JWT (JSON Web Tokens) for authentication and secure login

. User login and Token-Based Authentication

. Route Protection (Authenticated Routes)

. CRUD operations: Create, Read, Update, Delete for users

. Error Handling Middleware for comprehensive error management
 
. Tested using Thunder Client

## Technologies

. Node.js v16+

. Express.js v4+

. MongoDB (for database)

. JWT (JSON Web Tokens) - Authentication

. Mongoose - MongoDB ODM

. dotenv - Environment variable management

. Bcryptjs - Password hashing

. Thunder Client - API testing

## Installation

Follow these steps to set up and run the project:

### 1. Clone the Repository

```bash
git clone https://github.com/evcne/node-express-api.git
cd node-express-api
```
## 2. Install Dependencies
```bash
npm install
```
## 3. Set Up Environment Variables
Create a .env file in the root of the project and add the following configurations:
```bash
PORT=5000 or 5001
CONNECTION_STRING=mongodb://localhost:27017/yourdbname
ACCESS_TOKEN_SECRET=your_jwt_secret_key
```
## 4. Run MongoDB
If you're using a local MongoDB instance, ensure that MongoDB is installed and running. Alternatively, you can use MongoDB Atlas and configure the appropriate connection string in the .env file.

## 5. Start the Application
```bash
npm start
```

##  Handling
The project uses middleware for error handling. All errors are returned in JSON format with appropriate status codes.

##  Protection
Certain routes are protected and require a valid JWT token for access. The token should be included in the Authorization header as follows:
```bash
Authorization: Bearer <your_jwt_token>
```

## Testing
You can test the API using an API client like Thunder Client.

Open Thunder Client.

Enter the API URL.

Select the appropriate HTTP method (GET, POST, PUT, DELETE).

Fill in the necessary headers and body.

Inspect the responses.

## Contributing
To contribute to this project, please follow these steps:

Fork this repository.

Create a new feature branch (git checkout -b feature/feature-name).

Commit your changes (git commit -am 'Add new feature').

Push your changes (git push origin feature/feature-name).

Open a pull request.


## License
This project is licensed under the MIT License









 
