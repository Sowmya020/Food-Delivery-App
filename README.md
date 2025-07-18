# 🍽️ Food Delivery App

A full-stack food delivery application built during your tech journey. Users can explore nearby restaurants, view menus, place orders, and track delivery—all in a seamless experience.

---

## 🚀 Features

- **User registration & login** with JWT authentication  
- **Browse restaurants** and their menus
- **Add to cart & checkout**
- **Order tracking** with status updates
- **Admin role** for managing restaurants, items, and orders
- **Responsive UI** for both desktop and mobile

---

## 🛠️ Tech Stack

| Component     | Technology         |
|---------------|--------------------|
| Frontend      | React.js (Hooks)   |
| Backend       | Node.js + Express  |
| Database      | MongoDB (Mongoose) |
| Authentication| JSON Web Tokens    |
| UI Styling    | Tailwind CSS       |

---

## 🔧 Installation

# 1. Clone the repository
git clone https://github.com/Sowmya020/Food-Delivery-App.git
cd Food-Delivery-App

# 2. Setup Backend
cd backend

# 3. Install backend dependencies

# 4. Create environment file for backend
cp .env.example .env
# (Edit the .env file with your MongoDB URI and JWT_SECRET)

# 5. Start backend server
npm run server
# (Runs on http://localhost:3000)

# 6. Open a new terminal for frontend setup
cd ../frontend

# 7. Install frontend dependencies

# 8. Start frontend server
npm run dev
# (Runs on http://localhost:5173)

# 9. Open a new terminal for admin setup
cd ../admin

# 10. Install admin dependencies

# 11. Start frontend server
npm run dev
# (Runs on http://localhost:5174)
