

# 🌍 Travelo — React Travel Booking Web App

A modern **Travel Booking Website** built using **React + Vite + Firebase Authentication + Protected Routes**.
Users can explore tours, view details, and securely book trips after logging in.

> This project demonstrates real-world frontend architecture including authentication context, route protection, reusable UI components, and dynamic booking flow.

---

<img width="1920" height="869" alt="image" src="https://github.com/user-attachments/assets/4040cace-d486-458d-a0dc-30b90c738f29" />


---

## 📸 Preview

![Homepage](./preview/home.png)
![Tour List](./preview/tours.png)
![Booking](./preview/booking.png)

---

## 🚀 Features

* 🔐 Firebase Authentication (Login / Signup / Logout)
* 🛡 Protected Routes (Unauthorized users cannot book tours)
* 🧭 Tour Listing Page
* 📄 Tour Details Page
* 🧾 Booking System
* ⏳ Loading Pages & Error Handling
* 📱 Fully Responsive UI
* 🔄 React Context API for global auth state
* ⚡ Fast build using Vite

---

## 🧱 Tech Stack

**Frontend**

* React.js
* Vite
* React Router DOM
* Context API
* CSS3

**Backend / Services**

* Firebase Authentication
* Firebase Hosting

---

## 📂 Project Structure

```
src
│
├── assets
├── components
│   ├── Auth
│   │   └── Auth.jsx
│   ├── Context
│   │   ├── AuthContext.jsx
│   │   └── ProtectedRoutes.jsx
│   └── Ui
│       ├── Navbar.jsx
│       └── carousel.css
│
├── Pages
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── TourList.jsx
│   ├── TourDetails.jsx
│   ├── BookingForm.jsx
│   ├── BookingDetails.jsx
│   ├── Service.jsx
│   ├── LoadingPage.jsx
│   ├── TravelLoadingPage.jsx
│   └── ErrorElement.jsx
│
├── Firebase
│   └── config.js
│
├── Data
│   └── ListData.js
│
├── routes
│   └── Layout.jsx
│
├── App.jsx
└── main.jsx
```

---

## 🔐 Authentication Flow

1. User signs up or logs in
2. Auth state stored using **React Context**
3. Protected routes check authentication
4. Only logged-in users can access booking pages

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/react-travel-booking.git
cd react-travel-booking
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup Firebase

Create a Firebase project and enable **Email/Password Authentication**

Then create a `.env` file in the root:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

Update `src/Firebase/config.js` if necessary.

---

## 🧠 What I Learned

* Managing authentication using React Context
* Route guarding with React Router
* Structuring scalable React projects
* Firebase authentication integration
* Handling loading and error UI states
* Creating reusable components

---

## 📌 Future Improvements

* Online payment integration (Stripe)
* Admin dashboard
* Database (Firestore) for real bookings
* User booking history
* Reviews & ratings

---

## 👨‍💻 Author

**Your Name**
GitHub: [https://github.com/your-username](https://github.com/your-username)
LinkedIn: [https://linkedin.com/in/your-linkedin](https://linkedin.com/in/your-linkedin)

---

.
