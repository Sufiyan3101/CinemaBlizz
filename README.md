# 🎬 CinemaBlizz

An online entertainment platform where users can watch movies, web series, and unlock premium cartoon content through subscription.

---

## 🚀 Features

* 🎥 Watch Movies & Web Series
* 🧸 Premium Cartoons (Unlocked via subscription)
* 💳 Stripe (Test Mode) Subscription Integration
* 🔐 Authentication using Auth0
* 🛠 Admin Dashboard

  * ➕ Add movies/content
  * ❌ Delete movies/content
* 🌐 Fully responsive frontend

---

## 🛠 Tech Stack

### Frontend

* React (Vite)

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Authentication

* Auth0

### Payments

* Stripe (Test Mode)

### Deployment

* Backend: Render
* Frontend: Render

---

## 📂 Project Structure

```
CinemaBlizz/
│
├── Backend/
│   ├── Server.js
│   ├── dbconnection.js
│   ├── Schemas.js
│   ├── Payment.js
│   └── routes/
│
├── Frontend-vite/
│   ├── src/
│   └── public/
│
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the `Backend/` folder:

```
MONGODB_URL=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
PORT=8000
```

For frontend (`Frontend-vite`):

```
VITE_API_URL=your_backend_url
```

---

## 🧑‍💻 Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/your-username/CinemaBlizz.git
cd CinemaBlizz
```

---

### 2. Setup Backend

```
cd Backend
npm install
npm start
```

---

### 3. Setup Frontend

```
cd Frontend-vite
npm install
npm run dev
```

---

## 🌐 Deployment

* Backend deployed on Render
* Frontend deployed on Render

---

## 💳 Stripe Test Mode

This project uses Stripe in test mode.
Use test card details from Stripe documentation:

```
Card Number: 4242 4242 4242 4242
Expiry: Any future date
CVC: Any 3 digits
```

---

## 🔐 Authentication

User authentication is handled using Auth0:

* Secure login/signup
* Token-based authentication

---

## 🛠 Admin Functionality

Admin users can:

* Add new movies/web series
* Delete existing content
* Manage platform content dynamically

---

## 📌 Future Improvements

* 🎯 Recommendation system
* 📱 Mobile optimization improvements
* 🎬 Video streaming optimization (CDN)
* 💬 User reviews & ratings
* 📊 Admin analytics dashboard

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a pull request.

---

## 📄 License

This project is for educational purposes.

---

## 👨‍💻 Author

Developed by Sufiyan 🚀
