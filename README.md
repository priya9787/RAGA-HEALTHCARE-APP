# 🏥 Raga Healthcare SaaS Frontend

A modern **B2B Healthcare SaaS frontend application** built using React + TypeScript, demonstrating scalable architecture, real-world features, and clean UI/UX.

🚀 **Live Demo:** *https://raga-healthcare-app.netlify.app/*
📦 **GitHub Repo:** *https://github.com/priya9787/RAGA-HEALTHCARE-APP*

---

## ✨ Features

### 🔐 Authentication (Firebase)

* Login & Register functionality using Firebase Authentication
* Form validation & error handling
* Session persistence using `onAuthStateChanged`
* Protected routes for secure access

---

### 📊 Dashboard

* Overview cards (Patients, Appointments, Doctors)
* Dynamic patient count using global state
* Clean and responsive layout

---

### 📈 Analytics

* Interactive charts using Recharts
* Simulated patient growth data
* Responsive chart container

---

### 🏥 Patient Management

* Add new patients with form input
* **Grid View** (card-based UI)
* **List View** (table-style UI)
* Toggle between views
* Fully responsive design

---

### 🔔 Notifications (Service Worker)

* Service Worker implementation
* Browser notifications enabled
* Real use case: Notification triggered when a patient is added

---

### 🧠 State Management (Zustand)

* Global state for authentication & patients
* Persistent state using Zustand middleware (localStorage)
* Data shared across multiple pages

---

## 🛠 Tech Stack

* ⚛️ React (Vite)
* 🔷 TypeScript
* 🧠 Zustand (State Management)
* 🔥 Firebase Authentication
* 🎨 Tailwind CSS
* 📊 Recharts
* ⚙️ Service Workers

---

## 📁 Folder Structure

```
src/
 ├── components/
 ├── pages/
 │    ├── Login/
 │    ├── Dashboard/
 │    ├── Analytics/
 │    ├── Patients/
 ├── store/
 ├── services/
 ├── layouts/
 ├── routes/
 ├── utils/
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone <your-repo-link>
cd raga-healthcare-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup Firebase

Create a Firebase project and enable **Email/Password Authentication**.

Update your config in:

```
src/services/firebase.ts
```

### 4️⃣ Run the app

```bash
npm run dev
```

---

## 🔐 Authentication Note

* Users can **register and then login**
* Firebase handles secure authentication
* Session persists across refresh

---

## 🌐 Deployment

This project is deployed using:

* **Vercel** / **Netlify**

---

## 📌 Assignment Coverage

✔ Authentication (Firebase)
✔ Multiple pages (Dashboard, Analytics, Patients)
✔ Patient module (Grid/List toggle)
✔ Notifications using Service Worker
✔ State management with Zustand
✔ Clean UI/UX and responsive design

---

## 🚀 Future Improvements

* Role-based access (Admin/Doctor)
* Real backend integration
* Advanced analytics
* Micro-frontend architecture

---

## 👩‍💻 Author

**Priya Darshini**
Frontend Developer

---
