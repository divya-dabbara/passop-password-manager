# PassOP 🔐 – Password Manager

PassOP is a full-stack MERN password manager application that allows users to add, edit, and delete credentials with persistent cloud storage.  
This project demonstrates real-world frontend–backend integration, environment-based configuration, and production deployment.

⚠️ **Demo project only — do not store real passwords.**

---

## 🌐 Live Application

- **Frontend:** https://passop-password-manager-three.vercel.app  
- **Backend:** https://passop-backend-6nlf.onrender.com  

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- JavaScript
- Tailwind CSS
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB Native Driver
- CORS

### Database
- MongoDB Atlas (Cloud)

### Deployment
- Frontend: Vercel  
- Backend: Render

---

## ✨ Features

- Add new passwords
- Edit existing passwords
- Delete passwords
- Persistent cloud-based storage
- Environment-variable-based configuration
- Fully deployed frontend and backend

---

## 📁 Project Structure

```
passop-password-manager/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── .env.example
├── .gitignore
└── README.md
```

---

## ⚙️ Environment Variables

### Backend (`backend/.env`)
```env
MONGO_URI=your_mongodb_atlas_connection_string
PORT=3000
```

### Frontend (`frontend/.env`)
```env
VITE_API_URL=https://your-backend-url.onrender.com
```

> `.env` files are excluded from version control for security reasons.

---

## 🚀 Local Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/divya-dabbara/passop-password-manager.git
cd passop-password-manager
```

### 2️⃣ Backend setup
```bash
cd backend
npm install
npm run dev
```

### 3️⃣ Frontend setup
```bash
cd frontend
npm install
npm run dev
```

Visit the app at:
```
http://localhost:5173
```

---

## 🧪 Testing Checklist

- Add a password
- Edit a password
- Delete a password
- Refresh the page and verify persistence
- Confirm data appears in MongoDB Atlas

---

## 📚 What I Learned

- Full-stack MERN application architecture
- MongoDB Atlas integration and querying
- Secure handling of environment variables
- Debugging real production issues
- Deploying frontend and backend separately
- Cloud deployment using Vercel and Render

---

## 🔮 Future Improvements

- Encrypt stored passwords
- Add user authentication (login/signup)
- Improve UI/UX
- Add search and filtering functionality

---

## 👩‍💻 Author

**Divya Dabbara**  
Aspiring Full Stack Developer
