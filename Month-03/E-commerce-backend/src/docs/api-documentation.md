# 📘 API Documentation

## 🔐 User Authentication APIs

### 1. Register User

* **Endpoint:** `POST /api/auth/register`
* **Description:** Register a new user
* **Request Body:**

```json
{
  "name": "Raman",
  "email": "raman@example.com",
  "password": "123456"
}
```

* **Response:**

```json
{
  "message": "User registered successfully"
}
```

---

### 2. Login User

* **Endpoint:** `POST /api/auth/login`
* **Description:** Login user and return JWT token
* **Request Body:**

```json
{
  "email": "raman@example.com",
  "password": "123456"
}
```

* **Response:**

```json
{
  "token": "jwt_token_here"
}
```

---

### 3. Admin Access

* **Description:** Admin-specific routes require authentication and admin role
* **Header:**

```
Authorization: Bearer <token>
```

---

## 📦 Product APIs (Admin)

### 1. Add Product

* **Endpoint:** `POST /api/product/add`
* **Description:** Add a new product (Admin only)
* **Request Body:**

```json
{
  "name": "Book",
  "price": 200,
  "category": "Education",
  "stock": 10
}
```

* **Response:**

```json
{
  "message": "Product added successfully"
}
```

---

### 2. List Products

* **Endpoint:** `GET /api/product/list`
* **Description:** Get all products
* **Response:**

```json
[
  {
    "id": "1",
    "name": "Book",
    "price": 200
  }
]
```

---

### 3. Remove Product

* **Endpoint:** `DELETE /api/product/remove/:id`
* **Description:** Delete a product by ID (Admin only)
* **Response:**

```json
{
  "message": "Product removed successfully"
}
```

---

## 🛒 Cart APIs

### 1. Add to Cart

* **Endpoint:** `POST /api/cart/add`
* **Description:** Add product to cart
* **Request Body:**

```json
{
  "productId": "123",
  "quantity": 2
}
```

* **Response:**

```json
{
  "message": "Product added to cart"
}
```

---

### 2. Update Cart

* **Endpoint:** `PUT /api/cart/update`
* **Description:** Update product quantity in cart
* **Request Body:**

```json
{
  "productId": "123",
  "quantity": 3
}
```

* **Response:**

```json
{
  "message": "Cart updated successfully"
}
```

---

## 📦 Order APIs

### 1. Place Order

* **Endpoint:** `POST /api/order/place`
* **Description:** Place a new order
* **Response:**

```json
{
  "message": "Order placed successfully"
}
```

---

### 2. All Orders (Admin)

* **Endpoint:** `GET /api/order/all`
* **Description:** Get all orders (Admin only)

---

### 3. User Orders

* **Endpoint:** `GET /api/order/user`
* **Description:** Get logged-in user orders

---

### 4. Update Order Status

* **Endpoint:** `PUT /api/order/status`
* **Description:** Update order status (Admin only)
* **Request Body:**

```json
{
  "orderId": "123",
  "status": "Shipped"
}
```

* **Response:**

```json
{
  "message": "Order status updated"
}
```

---

##  Authentication Notes

* All protected routes require JWT token
* Add token in headers:

```
Authorization: Bearer <your_token>
```

---

## ✅ Summary

* **User:** Register, Login, Admin auth
* **Product:** Add, List, Remove
* **Cart:** Add, Update
* **Order:** Place, All Orders, User Orders, Update Status

---
