This is a basic Express app that serves API routes for a Gatsby Server Side Rendering (SSR) app. The API has request handlers responsible for retrieving product information and handling client login session. 

## Features
- Fetch product details
- User authentication (login)
- Fetch user details based on authentication token

## API Endpoints
### Fetch Products
- URL: /api/products
- Method: GET
- Description: Returns a list of products with details such as name, description, and price.
- Response:

      [
        {
          "id": 1,
          "name": "Wireless Headphones",
          "description": "High-quality wireless headphones with noise-canceling feature.",
          "price": 199.99
        },
        {
          "id": 2,
          "name": "Smart Watch",
          "description": "Smart watch with heart rate monitor, GPS, and various fitness tracking features.",
          "price": 149.99
        },
        ...
      ]
  
### User Login
- URL: /api/login
- Method: POST
- Description: Authenticates a user using username and password.
- Request Body:

      {
        "username": "john_doe",
        "password": "password123"
      }
- Response:

      {
        "token": "token1",
        "userId": 1
      }
- Error Response:

      {
        "message": "Invalid credentials"
      }
### Fetch User Details
- URL: /api/user
- Method: GET
- Description: Returns user details based on the provided authentication token.
- Headers:

      {
        "Authorization": "Bearer token1"
      }
- Response:

      {
        "id": 1,
        "username": "john_doe",
        "email": "john.doe@example.com",
        "name": "John Doe"
      }
- Error Response:

      {
        "message": "Invalid token"
      }
## Setup and Installation
### Clone the repository:

    git clone https://github.com/yourusername/gatsby-ssr-api.git
    cd gatsby-ssr-api

### Install dependencies:
    npm install

### Start the server:


    npm start
    
Server will be running on:

`http://localhost:2000`

## Project Structure

    gatsby-ssr-api/
    ├── data/
    │   ├── products.js
    │   └── users.js
    ├── index.js
    ├── package.json
    └── README.md
- data/products.js: Contains a list of product details.
- data/users.js: Contains a list of user details with username, password, and token.
- index.js: Main file that sets up the Express server and defines the API endpoints.

### Technologies Used
- Node.js
- Express
- Body-parser
- CORS
  
## Future Improvements
- Implement secure password storage using hashing algorithms.
- Add more sophisticated user authentication and authorization mechanisms.
- Expand the API to include more endpoints and features.
- Add unit tests to ensure the robustness of the API.
  
## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue.
