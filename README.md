# 📬 Subscription Tracker API

A backend application that allows users to manage subscriptions and automatically receive renewal reminder emails before their subscriptions expire.

This project demonstrates backend development using Node.js, Express, MongoDB, and modern cloud services like Upstash Workflow.

---

## 🚀 Live API

https://subscription-tracker-npb8.onrender.com

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Upstash Workflow (background jobs)
- Nodemailer (email notifications)
- JWT Authentication
- Arcjet (API protection)
- DayJS (date handling)

---

## ✨ Features

- User authentication with JWT
- Create and manage subscriptions
- Automatic renewal reminder emails
- Background job scheduling using Upstash
- Secure API with Arcjet protection
- MongoDB cloud database
- Production deployment on Render

---

## 📂 Project Structure


subscription-tracker
│
├── controllers
├── models
├── routes
├── utils
├── public
├── app.js
├── package.json
└── README.md


---

## ⚙️ Environment Variables

Create a `.env` file and add:


PORT=5500
DB_URI=your_mongodb_connection_string
EMAIL_PASSWORD=your_gmail_app_password
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d

QSTASH_URL=your_upstash_url
QSTASH_TOKEN=your_upstash_token
QSTASH_CURRENT_SIGNING_KEY=your_key
QSTASH_NEXT_SIGNING_KEY=your_key

ARCJET_KEY=your_arcjet_key
ARCJET_ENV=production


---

## ▶️ Run Locally

Clone the repository


git clone https://github.com/harsh-0905/subscription-tracker.git


Install dependencies


npm install


Run the server


npm run dev


Server will run on


http://localhost:5500


---

## 📡 API Endpoints

### Authentication


POST /api/auth/signup
POST /api/auth/signin


### Subscriptions


GET /api/subscriptions
POST /api/subscriptions
PUT /api/subscriptions/:id
DELETE /api/subscriptions/:id


---

## 📌 Future Improvements

- Add React dashboard frontend
- API documentation using Swagger
- Payment gateway integration
- Mobile push notifications

---

## 👨‍💻 Author

Harsh Yadav
