# Subscription Tracker API

A REST API for managing subscriptions with automated renewal reminder emails sent before expiry.

---

## Live API

https://subscription-tracker-npb8.onrender.com

---

## Tech Stack

- **Runtime:** Node.js + Express.js
- **Database:** MongoDB Atlas
- **Auth:** JWT
- **Background Jobs:** Upstash Workflow (QStash)
- **Email:** Nodemailer
- **API Protection:** Arcjet
- **Date Handling:** DayJS
- **Deployment:** Render

---

## Features

- JWT-based user authentication (signup/signin)
- Full CRUD for subscriptions
- Automated renewal reminder emails via background jobs
- Rate limiting and API protection with Arcjet
- Cloud-hosted MongoDB

---

## Project Structure
subscription-tracker/

├── controllers/

├── models/

├── routes/

├── utils/

├── public/

├── app.js

└── package.json

---

## Environment Variables

Create a `.env` file in the root:

```env
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
```

---

## Run Locally

```bash
git clone https://github.com/harsh-0905/subscription-tracker.git
cd subscription-tracker
npm install
npm run dev
```

Server runs at `http://localhost:5500`

---

## API Endpoints

### Auth

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/signin` | Login and receive JWT |

### Subscriptions

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/subscriptions` | Get all subscriptions |
| POST | `/api/subscriptions` | Create a subscription |
| PUT | `/api/subscriptions/:id` | Update a subscription |
| DELETE | `/api/subscriptions/:id` | Delete a subscription |

---

## Planned Improvements

- React dashboard frontend
- Swagger API documentation
- Payment gateway integration
- Mobile push notifications

---

## Author

**Harsh Yadav**  
[GitHub](https://github.com/harsh-0905) · [LinkedIn](https://linkedin.com/in/harshyadav95-dev) · [Portfolio](https://portfolio-7ivq.vercel.app)
