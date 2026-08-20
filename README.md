# Hospital Appointment System

A MERN stack based Hospital Appointment System developed using React, Express.js, Node.js, and MongoDB with Mongoose.

## 1. Project Name

**Hospital Appointment System**

The system manages basic information about doctors, patients, and hospital appointments.

## 2. Frontend Setup

Open a terminal and go to the frontend folder:

```bash
cd frontend
```

Install the required packages:

```bash
npm install
```

Run the React frontend:

```bash
npm run dev
```

The frontend will run using the Vite development server.

## 3. Backend Setup

Open another terminal and go to the backend folder:

```bash
cd backend
```

Install the required packages:

```bash
npm install
```

Start the backend server:

```bash
node server.js
```

The backend server runs on:

```text
http://localhost:5000
```

## 4. MongoDB Setup

MongoDB is used with Mongoose for storing patient, doctor, and appointment data.

The application uses the following collections:

* `patients`
* `doctors`
* `appointments`

For local MongoDB, the connection string can be:

```text
mongodb://localhost:27017/medcare
```

For MongoDB Atlas, use the connection string provided by MongoDB Atlas.

## 5. Required Environment Variables

Create a `.env` file inside the `backend` folder.

Add:

```env
MONGO_URI=your_mongodb_connection_string
```

Example for local MongoDB:

```env
MONGO_URI=mongodb://localhost:27017/medcare
```

The `.env` file should not be uploaded to GitHub.

Only `.env.example` should be committed.

## Technologies Used

* React
* React Router
* Node.js
* Express.js
* MongoDB
* Mongoose
* Fetch API
* Vite
