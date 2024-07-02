Introduction
The Resume Builder application allows users to input their resume information and receive a PDF version of their resume upon submission. Administrators can access, edit, and delete user details and resumes. The application is built using the MERN stack (MongoDB, Express.js, React/Next.js, Node.js).

Features
User Authentication (local storage based)
User can add multiple experiences, projects, hobbies, and social media URLs.
Generates a PDF version of the resume.
Admin interface to manage user details and resumes.
Responsive and user-friendly UI.
Technologies Used
Frontend
Next.js
Axios
TailwindCSS
Backend
Node.js
Express.js
Mongoose
bcryptjs
html-pdf
EJS
Setup and Installation
Backend

Clone the repository:
git clone <your-backend-repo-url>
cd backend
Install dependencies:

npm install
Set up environment variables:
Create a .env file in the root directory and add the following variables:

.env
MONGO_URI=<your-mongodb-uri>
PORT=8080

Run the server:
npm start
Frontend
Clone the repository:

git clone <your-frontend-repo-url>
cd frontend
Install dependencies:

npm install
Run the development server:

npm run dev
Usage
User's Screen
Sign Up / Login:
Users can sign up or log in using their email and password.
Fill Resume Information:
Users can fill out a multipart form with their resume details, including personal information, experiences, projects, hobbies, and social media links.
Generate PDF:
Upon form submission, the application generates a PDF version of the resume.
Admin Screens
Admin Login:
Admins can log in using their credentials.
View User Details:
Admins can view a list of all user resumes.
Edit/Delete User Information:
Admins can edit or delete user resume details.
Admin Access
Admin can log in and manage user data including viewing, editing, and deleting user entries.
Ensure to set up initial admin credentials directly in the database.
Notes
Due to family issues and shortage of time, the authentication part is implemented with local storage instead of JWT authentication.
Ensure MongoDB is running and accessible.
Customize the .env variables according to your setup.
