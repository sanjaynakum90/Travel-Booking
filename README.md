# 🌍 Travelo – React Travel Booking Application

Travelo is a modern **travel booking web application** built with **React + Vite** and **Firebase Authentication**. It allows users to explore tour packages, view detailed information, and make bookings through a clean and responsive UI.

---
<img width="1920" height="2635" alt="Travelio-02-03-2026_09_14_AM" src="https://github.com/user-attachments/assets/aad58737-3961-460e-bf10-091b6b59d8ea" />

---

## ✨ Features

* 🔐 **Authentication**

  * Login / Register using Firebase
  * Protected routes for authenticated users

* 🧭 **Tour Management**

  * Browse all available tours
  * Filter tours (All, New, Popular, Featured)
  * View detailed tour information

* 📝 **Booking System**

  * Book tours with a user-friendly form
  * View booking details

* ⚡ **Performance**

  * Built with Vite for fast development and builds

* 🎨 **UI & UX**

  * Fully responsive design
  * Clean and modern layout

---

## 🛠️ Tech Stack

* **Frontend:** React, Vite
* **Routing:** React Router DOM
* **State Management:** React Context API
* **Authentication:** Firebase Auth
* **Styling:** CSS
* **Linting:** ESLint

---

## 📂 Project Structure

```
src/
│── assets/
│── components/
│   ├── Auth/
│   │   └── Auth.jsx
│   ├── Pages/
│   │   ├── TourList.jsx
│   │   ├── TourDetails.jsx
│   │   ├── BookingForm.jsx
│   │   ├── BookingDetails.jsx
│   │   ├── LoadingPage.jsx
│   │   └── ErrorElement.jsx
│   ├── Ui/
│
│── Context/
│   ├── AuthContext.jsx
│   └── ProtectedRoutes.jsx
│
│── Data/
│   └── ListData.js
│
│── Firebase/
│   └── config.js
│
│── routes/
│   └── Layout.jsx
│
│── App.jsx
│── main.jsx
│── index.css
```

---

## 🔐 Authentication Flow

* Firebase Authentication handles user login and registration
* `AuthContext` manages global auth state
* `ProtectedRoutes` restricts access to private pages

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

## 📌 Future Enhancements

* 🧾 User booking history
* 💳 Payment gateway integration
* 🌐 Backend API for tours & bookings
* ⭐ User reviews and ratings
* 🛠 Admin dashboard

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---
