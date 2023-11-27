# Slash - User Authentication Script Documentation

## Overview
This JavaScript script is part of the user authentication functionality in the Slash web application. It handles user sign-up and login processes, interacting with a backend server for authentication and user data management.

## Location of Code
The code implementing this feature can be found [here](https://github.com/nainisha-b/slash/blob/main/LoginPage/assets/js/Login.js).

## Code Description

### DOM Element Retrieval
- `signUpButton`, `signInButton`, `container`, `register`, `userId`, `pass`, `cnf_pass`, `login_id`, `login_password`, `login_button`: Constants storing references to various HTML elements using `document.getElementById` or `document.querySelector`.

### Fetch User Data
- `getUserData()`: Asynchronously fetches user data from the server using the endpoint 'http://127.0.0.1:2000/getUserData' and stores it in `temp_getUserData_db`.

### Event Listeners
- `signUpButton` and `signInButton`: Toggle the appearance of a container by adding or removing the class "right-panel-active."
- `register`: Handles the user registration process, making a POST request to 'http://127.0.0.1:2000/SignUp' if validation conditions are met.
- `login_button`: Handles the user login process, making POST requests to 'http://127.0.0.1:2000/activeUser' and 'http://127.0.0.1:2000/Redirect' if login credentials are valid.

### Helper Functions
- `getUserData()`: Asynchronously fetches user data from the server.

## Usage
1. **Sign-Up:**
   - Clicking the sign-up button (`signUpButton`) activates the registration panel.
   - Enter email, password, and confirm password.
   - Clicking the register button (`register`) sends a registration request to the server.

2. **Sign-In:**
   - Clicking the sign-in button (`signInButton`) deactivates the registration panel.
   - Enter login credentials and click the login button (`login_button`).
   - Successful login triggers POST requests for user activation and redirection.

3. **User Data:**
   - User data is fetched at the script's initialization from 'http://127.0.0.1:2000/getUserData'.
   - Existing users are checked during registration to prevent duplicate accounts.

4. **Alerts:**
   - Alert messages are displayed for successful actions or errors during registration and login.


