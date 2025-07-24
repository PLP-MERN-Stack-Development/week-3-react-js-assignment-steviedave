# 📝 Task Manager — A MERN Stack To-Do List Application

This project is a simple yet elegant task manager (To-Do List) built using the **MERN stack**, which includes **MongoDB**, **Express**, **React**, and **Node.js**. It allows users to create, update, complete, and delete tasks in a clean and intuitive interface. The project is designed to help you stay organized and productive by keeping track of your daily activities.

---

## 📸 Preview of the Application

Here is what the Task Manager looks like:

<img src="./screenshots/task-manager-ui(1).png" alt="Task Manager UI Screenshot" style="max-width: 100%; border-radius: 12px; box-shadow: 0px 2px 10px rgba(0,0,0,0.1);" />

<img src="./screenshots/task-manager-ui.png" alt="Task Manager UI Screenshot" style="max-width: 100%; border-radius: 12px; box-shadow: 0px 2px 10px rgba(0,0,0,0.1);" />

Here's a screenshot of MongoDB atlas updating with the tasks once the user interacts with the UI

<img src="./screenshots/mongodb-atlas.png" alt="Task Manager UI Screenshot" style="max-width: 100%; border-radius: 12px; box-shadow: 0px 2px 10px rgba(0,0,0,0.1);" /> 

## ✨ Features

This project includes the following core features:

- ✅ **Add New Tasks**: Users can type in a task and add it instantly to their to-do list.
- 🗂️ **Display All Tasks**: All current tasks are displayed in a visually appealing card layout.
- ✅ **Mark Tasks as Complete**: Users can toggle a task’s status as complete or incomplete.
- ✏️ **Edit Task Text**: Tasks can be edited inline without needing to remove or re-add them.
- 🗑️ **Delete Tasks**: Users can remove tasks from the list permanently.
- 🧩 **Responsive UI**: The layout is optimized for various screen sizes using **Tailwind CSS**.
- ⚡ **Real-time Feel**: The app fetches tasks from the backend on load and updates state after operations.

---

## 🚧 Features in Progress

- 🔐 **User Authentication**: Feature under development to allow login/logout and user-specific task management.
- 🔄 **Live UI Sync**: Currently, the UI sometimes requires manual refreshing (e.g., after toggling a task). This is being actively worked on to improve reactivity and real-time updates using better state synchronization.

---

## 🛠️ Technologies Used

| Layer        | Technology                   |
|--------------|-------------------------------|
| **Frontend** | React (with Vite), Tailwind CSS |
| **Backend**  | Node.js, Express.js            |
| **Database** | MongoDB (via Mongoose)         |
| **Icons**    | react-icons                    |

---

## 📁 Project Structure

```
To-Do-List-MERN-App/
├── backend/
│   ├── models/
│   │   └── Todo.js
│   ├── routes/
│   │   └── todos.js
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   └── index.js
│   ├── public/
│   └── vite.config.js
│
├── .gitignore
├── README.md
```

---

## ⚙️ Getting Started

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/todo-mern-app.git
cd todo-mern-app
```

---

### Step 2: Setup the Backend

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` folder and add your MongoDB URI and desired port:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Then run the backend server:

```bash
npm start
```

Your backend API will now be live at: `http://localhost:5000`

---

### Step 3: Setup the Frontend

In a new terminal tab or window:

```bash
cd frontend
npm install
npm run dev
```

This will launch the frontend at `http://localhost:5173`

---

## 📡 API Overview

| Method | Endpoint         | Functionality                   |
|--------|------------------|----------------------------------|
| GET    | `/api/todos`     | Fetch all existing todos         |
| POST   | `/api/todos`     | Add a new todo                   |
| PATCH  | `/api/todos/:id` | Edit text or toggle completion   |
| DELETE | `/api/todos/:id` | Delete a specific todo           |

---

## 🧑‍💻 Author

This project was developed by **Stephen David Oduor**  
Feel free to fork it, improve it, and use it in your own projects.

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

> _Stay tuned for future enhancements, including authentication, better real-time syncing, and user-specific data persistence._

