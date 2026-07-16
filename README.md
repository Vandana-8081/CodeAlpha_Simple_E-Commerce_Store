# CodeAlpha_Simple_E-Commerce_Store

# 🛍️ Simple_E-Commerce_Store - MERN E-Commerce Website

Simple_E-Commerce_Store is a full-stack MERN E-Commerce application that allows users to browse products, manage their cart, and place orders. It also includes an Admin Panel to manage products and orders.

---

## 🚀 Features

### 👤 User Features
- User Registration & Login
- JWT Authentication
- Browse Products
- Search Products
- Filter Products by Category
- Product Details Page
- Add to Cart
- Update Cart Quantity
- Remove Items from Cart
- Place Orders
- View Order History
- Responsive Design

### 🛠️ Admin Features
- Admin Login
- Add New Products
- Update Products
- Delete Products
- View All Products
- Manage Customer Orders

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS
- JavaScript

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Cookie Parser
- CORS
- Multer (Image Upload) & Imagekit

---

## 📂 Project Structure

```
Simple_E-Commerce_Store
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── uploads
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Vandana-8081/CodeAlpha_Simple_E-Commerce_Store.git
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET_KEY=your_secret_key
```

---


### Home Page
<img width="1902" height="891" alt="image" src="https://github.com/user-attachments/assets/0273f044-4793-4fde-a1e8-880619c94617" />


### Product Page
<img width="1367" height="905" alt="image" src="https://github.com/user-attachments/assets/94e4603d-9c36-4d44-96ef-b9b417ab767c" />


### Order

<img width="1805" height="737" alt="image" src="https://github.com/user-attachments/assets/c478e96b-455c-45fc-86e7-8a5b96e1599b" />


### Admin Dashboard

<img width="1892" height="910" alt="image" src="https://github.com/user-attachments/assets/c5b6030d-8797-439a-a7a8-973233ce00ad" />

### product Details
<img width="1746" height="757" alt="image" src="https://github.com/user-attachments/assets/c6924f86-f854-442a-b36d-e8ac809b92c8" />

---

## 📌 API Endpoints

### Authentication

| Method | Endpoint |
|----------|----------------|
| POST | /api/register |
| POST | /api/login |
| POST | /api/logout |

### Products

| Method | Endpoint |
|----------|----------------|
| GET | /api/products |
| GET | /api/product/:id |
| POST | /admin/add-product |
| PUT | /admin/update-product/:id |
| DELETE | /admin/delete-product/:id |


### Orders

| Method | Endpoint |
|----------|----------------|
| POST | /api/order |
| GET | /api/orders |

---

## 🎯 Future Improvements

- Wishlist
- Product Reviews 
- Email Notifications
- Dark Mode
- Coupon System
- Product Recommendation
- Inventory Management

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 👩‍💻 Author

**Vandana**

- MERN Stack Developer
- GitHub: https://github.com/Vandana-8081
- LinkedIn: https://www.linkedin.com/in/vandana-098181330/

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!
