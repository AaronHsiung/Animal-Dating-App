# Animal-Dating-App
The Animal Dating App is a web-based full-stack application that aims to match shelter animals with prospective owners. It allows users to browse pet profiles, manage favorites, and facilitates administrators to manage pet listings effectively.

# Features
- User-friendly Interface: Easy navigation and interaction for prospective pet owners.
- Admin Management: Admins can add, update, and delete pet profiles.
- Responsive Design: Accessible on various devices, enhancing user engagement.
- Secure Authentication: Ensures secure access for admins and users.

# Prerequisites
- Python 3.8 or newer
- Node.js 14.x or newer
- PostgreSQL

# Installation
## 1. Clone the Repository
```
git clone https://github.com/AaronHsiung/Animal-Dating-App.git
cd animal-dating-app
```

## 2. Backend Setup
Navigate to the backend directory:
```
cd backend
```

Create a .env file and add the necessary environment variables:
```
NEON_POSTGRES_CONNECTION_STRING='postgresql://yourconnectionstring'
AWS_ACCESS_KEY_ID='yourawsaccesskey'
AWS_SECRET_ACCESS_KEY='yourawssecretkey'
AWS_REGION='us-east-2'
S3_BUCKET='yourbucketname'
```

Create and activate a virtual environment:
```
python -m venv venv  # or python3 -m venv venv on Mac/Linux
source venv/bin/activate  # For Windows use venv\Scripts\activate
```

Install dependencies:
```
pip install -r requirements.txt
```

Run the application:
```
python app.py
```

## 3. Frontend Setup
Navigate to the frontend directory from the project root:
```
cd frontend
```

Install dependencies:
```
yarn install  # or npm install
```

Start the application:
```
yarn start  # or npm start
```
Open http://localhost:3000 to view it in the browser.

# Usage
The application provides two main interfaces:
- Admin Interface: For managing animal profiles.
- User Interface: For users to browse and like animal profiles.

# Team
- Aidan Goldstein
- Yi-Han Hsiung
- Pinky Huang
- Richard Quach

# Course
CS 467 Online Capstone Project - Winter 2024

# Conclusion
This project serves as a practical application designed to help shelter animals find homes by leveraging modern web technologies. It provides an engaging platform for users and efficient tools for administrators.
