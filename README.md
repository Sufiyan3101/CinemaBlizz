# 🎬 CinemaBlizz

> **Your ultimate entertainment destination** — stream Bollywood, Hollywood, Web Series, and unlock premium Cartoon content.

## ✨ What is CinemaBlizz?

CinemaBlizz is a full-stack streaming platform where users can **browse and watch movies & web series for free**, and **unlock premium cartoon content** through a subscription. Built with a modern tech stack, featuring secure authentication, real payment integration, and a powerful admin dashboard.

---

## 🚀 Core Features

### 🎥 Free Content
- Browse and watch **Bollywood** movies
- Browse and watch **Hollywood** movies  
- Stream **Web Series** with episode-level detail pages

### 👑 Premium Content (Subscription Required)
- Access to the full **Cartoons** library — unlocked after a one-time payment via **Stripe**

### 🔐 Authentication
- Secure **login & signup** powered by **Auth0**
- Session persistence across devices and page refreshes
- Token-based authentication with refresh token rotation

### 💳 Subscription & Payments
- One-time subscription payment via **Stripe** (Test Mode)
- Seamless checkout flow with success/cancel redirect pages
- Payment status persisted per user

### 🔖 Watchlist
- Add any movie or series to your **personal watchlist**
- Bookmark icon on every card for quick access
- Watchlist synced across your session

### 🛠 Admin Dashboard
- Add new movies, web series, or cartoon content
- Delete existing content
- Manage the full platform dynamically — no code changes needed

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React (Vite) |
| Backend | Node.js + Express.js |
| Database | MongoDB |
| Authentication | Auth0 |
| Payments | Stripe (Test Mode) |
| Deployment | Render (Frontend + Backend) |

---

## 📂 Project Structure

```
CinemaBlizz/
│
├── Backend/
│   ├── Server.js           # Entry point
│   ├── dbconnection.js     # MongoDB connection
│   ├── Schemas.js          # Mongoose schemas
│   ├── Payment.js          # Stripe payment routes
│   └── routes/             # API routes
│
├── Frontend-vite/
│   ├── src/
│   │   ├── Components/     # Reusable UI components
│   │   ├── Pages/          # Route-level pages
│   │   ├── Admin/          # Admin dashboard
│   │   └── Css/            # Stylesheets
│   └── public/
│       └── _redirects      # Render SPA routing fix
│
└── README.md
```

---

## ⚙️ Environment Variables

### Backend — `Backend/.env`

```env
MONGODB_URL=your_mongodb_connection_string
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxx
PORT=8000
```

### Frontend — `Frontend-vite/.env`

```env
VITE_AUTH0_DOMAIN=your_auth0_domain
VITE_AUTH0_CLIENT_ID=your_auth0_client_id
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxx
VITE_API_URL=your_backend_url
```

---

## 🧑‍💻 Local Setup

### 1. Clone the repo

```bash
git clone https://github.com/your-username/CinemaBlizz.git
cd CinemaBlizz
```

### 2. Start the Backend

```bash
cd Backend
npm install
npm start
```

### 3. Start the Frontend

```bash
cd Frontend-vite
npm install
npm run dev
```

App runs at `http://localhost:5173`

---

## 💳 Test the Payment Flow

This project uses **Stripe Test Mode** — no real money is charged.

Use these test card details on the Stripe checkout page:

```
Card Number : 4242 4242 4242 4242
Expiry Date : Any future date  (e.g. 12/29)
CVC         : Any 3 digits     (e.g. 123)
```

After a successful payment, the Cartoons section unlocks automatically.

---

## 🌐 Deployment

Both services are deployed on **Render**:

| Service | Type | URL |
|---|---|---|
| Frontend | Static Site | `cinemablizzz.onrender.com` |
| Backend | Web Service | `cinemablizzbackend.onrender.com` |

> **Note:** The frontend uses a `_redirects` file (or Render rewrite rules) to support React Router on full-page refreshes.

---

## 🔐 Auth0 Setup Notes

- Refresh Token Rotation is **enabled** for persistent sessions across mobile and desktop
- `cacheLocation` is set to `localStorage` to survive page refreshes
- Allowed Callback/Logout URLs must include both `localhost` and the live Render URL

---

## 🛠 Admin Access

Admin functionality is restricted to whitelisted email addresses. Admins can:

- ➕ Add new movies, web series, and cartoons to the platform
- ❌ Delete any existing content from the site
- 📋 Manage all platform content dynamically from a dedicated dashboard — no code changes needed

---

## 🤝 Contributing

Contributions are welcome! Fork the repo, create a feature branch, and open a pull request.

---

## 📄 License

This project is built for educational purposes.

---

## 👨‍💻 Author

Built with ❤️ by **Sufiyan**