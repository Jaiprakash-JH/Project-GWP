# Tech Stack

Hey **GWP Team**,

I’m **JaiprakashJH**, and as you already know, we’re working on the **"Tech Stack"** project. This platform is built for beginner coders or anyone who wants to start learning coding for free.

Just imagine a world where everyone learns coding. The possibilities are endless, and that’s exactly what we’re working toward! 

But before we dive in, I just want to make a quick note: **please don’t copy the code** for your own websites. This is a collaborative effort, and the goal is to build something meaningful together. Let's stay focused on improving and expanding this project!

## Project Overview

"Tech Stack" is a free coding learning platform where beginners can explore and learn different programming languages and technologies. The idea is simple: help people from all over the world learn to code and become future tech leaders.

Our platform will feature various coding tutorials, resources, and hands-on projects to help learners build their skills. We are dedicated to making coding accessible to everyone, no matter where they are in their learning journey.

## Project Structure

Here’s how the project is organized:

### Backend (Node.js + Express)
- **`backend/`**: This folder holds the backend code for our project.
  - **`app.js`**: The main server file that runs the backend.
  - **`config/`**: Contains files like `db.js` for setting up the MongoDB connection.
  - **`controllers/`**: Handles business logic (e.g., managing courses or users).
  - **`models/`**: Contains MongoDB schemas for managing our data (like `Course.js`).
  - **`routes/`**: Defines API endpoints for handling HTTP requests (e.g., `auth.js`, `courses.js`).

### Frontend (React)
- **`frontend/`**: This folder contains all the React code for the user interface.
  - **`public/`**: Contains static HTML files and the entry point for React (`index.html`).
  - **`src/`**: Contains the React components, main app logic, and API helper functions.
    - **`components/`**: Reusable UI components like `CourseList.js` for displaying courses and `Header.js` for the app header.
    - **`api.js`**: A helper file to make API requests to the backend.
    - **`App.js`**: The main React component that holds the structure of the app.
    - **`index.js`**: The entry point for the React app that renders the `App.js` component.

### Static Assets
- **`assets/`**: This folder holds static files like CSS, JavaScript, and media.
  - **`css/`**: Stylesheets for different pages (e.g., `about.css`, `donate.css`, etc.).
  - **`js/`**: JavaScript files for managing page-specific functionality (e.g., `about.js`, `donate.js`).
  - **`media/`**: Contains media files like audio (e.g., `ltns.mp3`).

### Root-Level Files
- **`package.json`**: Manages project dependencies and scripts for both the frontend and backend.
- **`README.md`**: This file! It provides a project overview and important instructions for developers and contributors.

## Getting Started

Here’s how you can set up and run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/Tech-Stack.git
   cd Tech-Stack
2. **Install Backend Dependencies**:
Navigate to the backend folder and install the required Node.js packages:

```bash
cd backend
npm install
This installs all the dependencies for the backend, such as Express and MongoDB packages.

3. **Set Up the Frontend**:
Navigate to the frontend folder and install the required React dependencies:

bash
Copy code
cd frontend
npm install
This will install all the necessary dependencies for the React frontend.

4. **Run the Backend Server**
In the backend folder, start the Node.js server:

bash
Copy code
cd backend
node app.js
The backend server will now run at http://localhost:5000.

5. **Run the Frontend React App**
In the frontend folder, start the React development server:

bash
Copy code
cd frontend
npm start
The React app will be available at http://localhost:3000.

6. **Open the Application in Your Browser**
Once both servers are running, you can open your browser and go to http://localhost:3000 to view the app. The backend API will be available at http://localhost:5000.

API Endpoints
Here are some key API endpoints you can use to interact with the backend:

POST /api/auth/login: Log in a user.
POST /api/auth/register: Register a new user.
GET /api/courses: Get a list of courses available for learning.
GET /api/courses/:id: Get details of a specific course.
How to Work on the Project
Working on the Backend
If you are working on the backend, follow these steps:

Create New Routes: Add new routes for handling different API requests in the routes/ folder. For example, if you're adding a new feature related to users, create a new route file like users.js in the routes/ directory.
Add New Controllers: Write the logic for your routes in the controllers/ folder. Each controller will handle the specific business logic for the corresponding route.
Model Updates: If you need to add new data fields or change the structure, update the MongoDB schemas in the models/ folder.
Testing: Test your backend API using tools like Postman or Insomnia. You can test individual routes and make sure they behave as expected.
Working on the Frontend
If you’re working on the frontend, here’s how you can proceed:

Create New Components: Add new React components in the components/ folder. For example, if you're adding a page for a new feature, you can create a new component like NewFeaturePage.js and import it into App.js.
API Integration: Use the api.js file to make API calls to the backend. You can create functions like getCourses() to fetch data from the backend and display it in your components.
Styling: Make sure to style the components using the corresponding CSS files in the assets/css/ folder. Each page or component may have its own CSS file to handle specific styles.
UI/UX: Focus on making the user interface clean, intuitive, and easy to navigate. You can update the components to create a seamless experience for users.
Testing: Test the frontend UI in the browser to ensure everything looks and behaves correctly. Use browser developer tools to inspect elements and debug issues.
Working on the Full Stack
If you want to work on both frontend and backend together:

Update Both: Keep the frontend and backend in sync. If you change the data structure or API endpoints on the backend, make sure to update the frontend accordingly.
Collaborate: Coordinate with other team members working on either the frontend or backend to ensure that everything integrates smoothly.
Handle Issues: When you face integration issues, debug both the frontend and backend. Use console.log() in JavaScript and check network requests to troubleshoot.
