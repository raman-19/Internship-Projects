# 🛒 E-Commerce Backend API

A fully functional **E-Commerce Backend** built using **Node.js, Express, and MongoDB**. This project provides RESTful APIs for user authentication, product management, cart operations, and order processing.

---

## 🚀 Features

* 🔐 User Authentication (Register & Login with JWT)
* 👤 Role-based Access (Admin & User)
* 📦 Product Management (Add, List, Remove)
* 🛒 Cart Management (Add & Update Cart)
* 📑 Order Management (Place Order, View Orders, Update Status)
* 🔒 Protected Routes with Middleware

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** JWT (JSON Web Token)
* **Testing:** Jest, Supertest

---

## 📂 Project Structure

```
E-commerce-backend/
│── config/
│── controllers/
│── middleware/
│── models/
│── routes/
│── tests/
│── app.js
│── server.js
│── package.json
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ecommerce-backend.git
cd ecommerce-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
PORT=4000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

### 4. Run the server

```bash
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

## 🔐 Authentication APIs

### Register User

`POST /api/auth/register`

### Login User

`POST /api/auth/login`

---

## 📦 Product APIs (Admin)

* `POST /api/product/add` → Add product
* `GET /api/product/list` → Get all products
* `DELETE /api/product/remove/:id` → Remove product

---

## 🛒 Cart APIs

* `POST /api/cart/add` → Add to cart
* `PUT /api/cart/update` → Update cart

---

## 📑 Order APIs

* `POST /api/order/place` → Place order
* `GET /api/order/user` → Get user orders
* `GET /api/order/all` → Get all orders (Admin)
* `PUT /api/order/status` → Update order status

---

## 🔐 Authorization

Protected routes require JWT token in headers:

```
Authorization: Bearer <token>
```

---

## 🧪 Running Tests

```bash
npm test
```

---

## 📌 Future Improvements

* 💳 Payment Integration (Stripe/Razorpay)
* ⭐ Product Reviews & Ratings
* 📊 Admin Dashboard Analytics
* 📧 Email Notifications

---

## 👨‍💻 Author

**Raman Tiwary**
B.Tech CSE | Backend Developer

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---
