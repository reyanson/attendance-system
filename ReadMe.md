# Preview Video
[![Watch the video](https://img.youtube.com/vi/zwEJeM8ExRc/hqdefault.jpg)](https://www.youtube.com/watch?v=zwEJeM8ExRc))
# Attendance System

This project is part of the practical assessment for the Software Engineer Internship, built with React and Bootstrap for the frontend, and Express with JWT authentication for the backend.

This backend system is built on Express, utilizing Node.js. Authentication and authorization are handled using JSON Web Tokens (JWT). On the frontend, React is employed with version 18.2.0. These technologies ensure robustness, security, and scalability for the system.


## Table of Content

 - [Tech Stack]([https://github.com/reyanson/attendance-system?tab=readme-ov-file#tech-stack])
 - [Setup and Installation]([https://github.com/reyanson/attendance-system?tab=readme-ov-file#setup-and-installation])
 - [Usage]([https://github.com/reyanson/attendance-system?tab=readme-ov-file#usage])
 - [Features]([https://github.com/reyanson/attendance-system?tab=readme-ov-file#features])
 - [Screenshots]([https://github.com/reyanson/attendance-system?tab=readme-ov-file#screenshots])


## Tech Stack

**Client:** React, Bootstrap, SweetAlert2  

**Server:** Express, JWT, Cookie Parser, CORS


## Setup and Installation

### Prerequisites
 - React 
 - Vite [Frontend Tool]
 - Bootstrap
 - Node.js
 - Express
 - npm or yarn

### Backend (Spring Boot)

1.Navigate to the server directory

```bash
cd attendance-system/server
```

2.Install the dependencies:

```bash
npm install
```

3.Start the Express server:

```bash
npm start
```

### Frontend (React)

1.Navigate to the client directory:

```bash
cd attendance-system/client
```

2.Install the dependencies:

```bash
npm install
```

3.Run the React application:

```bash
npm run dev
```


## Usage

### Login
1.  Open your web browser and go to http://localhost:5173.
2.  Enter the username and password provided in the Login Credentials section.

| Username             | Password                                                                |
| ----------------- | ------------------------------------------------------------------ |
| reyanson@gmail.com | Password@123 |


3.  Click the "Login" button to access the home page.

### Home Page
1.  After a successful login, you will be redirected to the home page.
2.  The home page will display a welcome message and a logout button.
## Features

### Backend
 - Built with Express.
 - REST API for handling login requests.
 - JWT tokens for authentication.
 - User data is managed through a hardcoded check for simplicity.

 ### Frontend
 - Built with React.
 - Login page with email and password fields.
 - The home page displays a welcome message and a logout button.
 - Navigation and authentication handling.


## Screenshots

 - Login Page
![App Screenshot](https://github.com/reyanson/attendance-system/blob/14171080106dbe75986cd60b383f2f258c6e3337/docs/1.Login%20page.png)

- Login with incorrect password
![App Screenshot](https://github.com/reyanson/attendance-system/blob/14171080106dbe75986cd60b383f2f258c6e3337/docs/2.Login%20with%20incorrect%20password.png)

- Incorrect password
![App Screenshot](https://github.com/reyanson/attendance-system/blob/14171080106dbe75986cd60b383f2f258c6e3337/docs/3.Incorrect%20password.png)

 - Success login
![App Screenshot](https://github.com/reyanson/attendance-system/blob/14171080106dbe75986cd60b383f2f258c6e3337/docs/4.Success%20login.png)

- Home page
![App Screenshot](https://github.com/reyanson/attendance-system/blob/14171080106dbe75986cd60b383f2f258c6e3337/docs/5.Home%20page.png)

- Logout
![App Screenshot](https://github.com/reyanson/attendance-system/blob/14171080106dbe75986cd60b383f2f258c6e3337/docs/6.Logout.png)
