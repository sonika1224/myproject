const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
const app = express();

// ✅ Middleware
app.use(cors({ origin: "http://localhost:3000" })); // Allow frontend
app.use(express.json());

// ✅ Connect to MongoDB
connectDB();

// ✅ Routes
app.use("/api/auth", require("./routes/authroutes"));

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
