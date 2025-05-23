# CinemaTicket 🎬

A modern web application for booking movie tickets online. Built with React, Node.js, and MySQL.

Created by Abedin Sokoli, Aurora Selmanaj, Uron Ternava, Anesa Hoxha, Amra Durguti

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MySQL](https://www.mysql.com/) (v8.0 or higher)
- [Git](https://git-scm.com/)

## Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd CinemaTicket-main
```

### 2. Database Setup
1. Open MySQL Workbench or your MySQL client
2. Create a new database named 'kinema':
```sql
CREATE DATABASE kinema;
```
3. Create the Users table:
```sql
USE kinema;
CREATE TABLE IF NOT EXISTS Users (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 3. Configure Database Connection
1. Navigate to `backend/src/utils/dbConnection.ts`
2. Update the database credentials with your MySQL configuration:
```typescript
const dbName: string = 'kinema';
const dbUsername: string = 'your_username';  // Change this
const dbPassword: string = 'your_password';  // Change this
const host: string = 'localhost';
```

### 4. Install Dependencies and Start Servers

#### Backend Setup
```bash
cd backend
npm install
npm start
```
The backend server will start on http://localhost:3000

#### Frontend Setup
In a new terminal:
```bash
cd react/my-project
npm install
npm run dev
```
The frontend development server will start on http://localhost:5173

## Features
- 🎟️ Browse available movies
- 🔍 Search movies by title
- 👤 User authentication (login/register)
- 🎫 View movie details and showtimes
- 📝 Book tickets (requires login)

## Troubleshooting

### Common Issues:
1. **Database Connection Error**
   - Verify your MySQL server is running
   - Check database credentials in dbConnection.ts
   - Ensure the 'kinema' database exists

2. **Port Already in Use**
   - Backend: Change port in server configuration
   - Frontend: Use `npm run dev -- --port <different-port>`

3. **Module Not Found Errors**
   - Run `npm install` in both backend and frontend directories
   - Clear node_modules and package-lock.json and retry installation

## Contributing
Feel free to submit issues and enhancement requests!

## License
[MIT License](LICENSE) - Copyright (c) 2024 Abedin Sokoli, Aurora Selmanaj, Uron Ternava, Anesa Hoxha, Amra Durguti

## Support
For support, please open an issue on GitHub repository.

## Authors
- **Abedin Sokoli** - Project Lead & Full Stack Development
- **Aurora Selmanaj** - Frontend Development
- **Uron Ternava** - Backend Development
- **Anesa Hoxha** - UI/UX Design
- **Amra Durguti** - Database Management

Project created in 2024


