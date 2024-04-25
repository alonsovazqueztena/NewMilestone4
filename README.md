# Full-Stack Login and Register Page Using MERN Stack

Welcome to our guide on building a full-stack login and register page using the MERN stack. This project demonstrates the creation of a secure and functional login and registration system using React.js, MongoDB, Express, Bcrypt, JWT, and more.

## Project Overview
This project employs the MERN stack to build robust and secure web applications. We'll delve into authentication, authorization, password encryption, and user session management using JSON Web Tokens.

## Technologies Used
- **React.js**: Utilized for crafting the front-end user interface.
- **MongoDB**: A NoSQL database for secure user data storage.
- **Express.js**: A back-end web application framework running on Node.js.
- **Bcrypt**: Used for hashing and securing user passwords.
- **JWT (JSON Web Token)**: Facilitates secure transmission of information as a JSON object.
- **React-hot-toast**: Displays professional-looking notifications.

## Directory Structure
- **/client**: Contains all client-side code.
  - **/context**: Manages React context for state.
  - **/public**: Houses public assets and HTML files.
  - **/src**: Source files for React components and pages.
    - **/assets**: Static files like images and styles.
    - **/components**: Reusable React components.
    - **/pages**: Components that represent various pages.
- **/server**: Houses server-side code.
  - **/controllers**: Functions handling requests.
  - **/helpers**: Includes helper functions, such as those for JWT.
  - **/models**: Mongoose models for MongoDB data schemas.
  - **/routes**: Manages Express routes for API requests.

## Getting Started
To start, clone the repository and follow the setup instructions to install all necessary dependencies and run the development server.

Run the following commands in your terminal:
- For client-side setup, navigate to `NewMilestone4/client` and enter `npm run dev`.
- For server-side setup, navigate to `NewMilestone4/server` and enter `npm start`.

Create an `.env` file with your MongoDB connection string and add your IP address to the approved list in MongoDB settings.

## License
This project is licensed under the MIT License. For more details, refer to the LICENSE file.
