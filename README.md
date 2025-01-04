Personal Task Management Application

A full-stack web application for efficient task management, built with the MERN stack (MongoDB, Express.js, React, Node.js). This application provides a simple and intuitive way for users to organize their tasks. Users can create, view and delete tasks, as well as categorize them, set priorities, and assign due dates. The application is designed with a focus on a clean user interface, secure authentication, and a well-structured codebase.

🚀 Features

•	User Authentication
Secure registration and login
JWT-based authentication with HTTP-only cookies
Password encryption with bcrypt

•	Task Management
Create tasks with titles, descriptions and due dates.
Set task priorities (Low, Medium, High)
Read and delete tasks

•	User Interface
Intuitive task organization
Real-time updates
Advanced filtering and search capabilities

•	Pagination: Efficiently handle large numbers of tasks. 

•	Responsive Design: The application adapts to different screen sizes.


🛠️ Technologies Used

Backend
•	Node.js
•	Express.js
•	MongoDB
•	Mongoose
•	JWT for authentication
•	bcrypt for password hashing
•	Express-validator for input validation

Frontend
•	React.js
•	Tailwind CSS
•	Axios
•	React Router DOM

Testing
•	Jest
•	React Testing Library
•	Supertest

Version Control
•	Git
•	Github

⚠️  Follow these instructions to get the project up and running on your local machine.

📋 Prerequisites

Before you begin, ensure you have installed:
•	Node.js (v14 or higher)
•	MongoDB
•	npm or yarn

🔧 Installation and Setup

1.	Clone the repository
```bash 
git clone https://github.com/Rhadbane/personal-task-manager.git 
cd personal-task-manager 
```


2.	Install  Backend dependencies
```bash 
cd backend 
npm install 
```
3.	Install Frontend dependencies
```bash 
cd ../frontend 
npm install 
```
4.	Environment Variables
Create a .env files in both the backend and frontend directories:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
REACT_APP_API_URL=http://localhost:5000/api

6.	Start the Application
   
In the backend directory:
npm run dev
In the frontend directory:
npm start

The frontend application will usually be available at http://localhost:3000

📝 API Documentation

Authentication Endpoints
POST /api/auth/register - Register a new user
POST /api/auth/login - Login user
POST /api/auth/logout - Logout user

Task Endpoints
GET /api/tasks - Get all tasks (with pagination and filters)
POST /api/tasks - Create a new task
GET /api/tasks/:id - Get specific task
DELETE /api/tasks/:id - Delete task

🧪 Testing

Run backend tests:
cd backend
npm test

Run frontend tests:
cd frontend
npm test

🔐 Security Features

•	HTTP-only cookies for JWT storage
•	Password hashing using bcrypt
•	Input validation and sanitization
•	Protected API routes
•	CORS configuration
•	Secure error handling

🚦 Project Structure

Personal-Task-Manager/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
└── README.md

🤝 Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:
1.	Fork the repository
2.	Create a feature branch (git checkout -b feature/AmazingFeature)
3.	Commit your changes (git commit -m 'Add some AmazingFeature')
4.	Push to the branch (git push origin feature/AmazingFeature)
5.	Submit a pull request to the main repository

🐛 Bug Reports and Feature Requests

If you find a bug or have a feature request, please open an issue on GitHub.

👥 Authors

Idriss Rhadbane - GitHub Profile (Rhadbane)

🙏 Acknowledgments

•	Inspiration from various task management applications
•	Open source community for the amazing tools and libraries

📱 Future Enhancements

•	Real-time notifications
•	Collaborative task sharing
•	Mobile application development
•	Advanced analytics dashboard
•	Offline functionality


⚠️ Important Notes

•	Ensure all environment variables are properly set before running the application
•	MongoDB must be running for the application to work
•	Make sure to use Node.js version 14 or higher

💡 Contact

Feel free to reach out if you have any questions or suggestions! email: rhadbane.idriss@gmail.com
