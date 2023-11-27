# Slash - Node.js Backend Script Documentation

## Overview
This Node.js script serves as the backend for the Slash web application, handling user authentication and related functionalities. It communicates with a MySQL database, exposes API endpoints, and executes npm start for redirection.

## Location of Code
The code implementing this feature can be found [here](https://github.com/nainisha-b/slash/blob/main/LoginPage/services.js).

## Code Description

### Required Modules
- `http`, `express`, `child_process`: Core Node.js modules for HTTP, web server, and child process management.
- `body-parser`: Middleware to parse incoming request bodies.
- `mysql`: MySQL database connector.
- `fs`: File system module.
- `cors`: Middleware for handling Cross-Origin Resource Sharing (CORS).

### Configuration
- `connection`: MySQL database connection configuration.
- `app`: Express application instance.
- `cors` and `body-parser` middleware setup.

### Database Initialization
- Establishes a connection to the MySQL database on localhost with user credentials.

### API Endpoints

1. **/activeUserGet**
   - GET endpoint to retrieve the currently active user.
   - Returns the `activeUser` as a string.

2. **/getUserData**
   - GET endpoint to retrieve user data from the MySQL database.
   - Sends the user data as an array of arrays to the requesting client.

3. **/SignUp**
   - POST endpoint to handle user registration.
   - Expects a JSON payload with `user_id` and `password`.
   - Inserts the user into the MySQL database.

4. **/activeUser**
   - POST endpoint to set the active user.
   - Expects a JSON payload with `id`.
   - Updates the `activeUser` variable.

5. **/Redirect**
   - POST endpoint to execute `npm start` for redirection.
   - Executes npm start in a specified folder using `child_process`.

### Active User Handling
- `activeUser` variable to store the currently active user.

### Database Queries
- `user_database` array to store user data fetched from the database.

### Server Initialization
- Enables CORS for cross-origin resource sharing.
- Listens on port 2000 or the environment-defined port.

## Usage
1. **Get Active User:**
   - Access the /activeUserGet endpoint to retrieve the currently active user.

2. **Get User Data:**
   - Access the /getUserData endpoint to retrieve user data from the database.

3. **User Registration:**
   - Send a POST request to /SignUp with a JSON payload containing `user_id` and `password` for user registration.

4. **Set Active User:**
   - Send a POST request to /activeUser with a JSON payload containing `id` to set the active user.

5. **Redirection:**
   - Send a POST request to /Redirect to execute npm start for redirection.

## Note
- This script uses the `express` framework for handling routes and middleware, and it communicates with a MySQL database for user authentication.

