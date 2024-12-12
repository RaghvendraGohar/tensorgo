import dotenv from "dotenv";
import express from "express";
import passport from "passport";
import session from "express-session";
import connectDB from "./config/database.js";
import "./config/passport.js"; 
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import emailRoutes from "./routes/emailRoutes.js";

dotenv.config(); // Load environment variables

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Use `express.json` middleware to parse JSON

// Configure session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET || "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Connect to the database
connectDB();

// Define routes
app.use("/api/users", userRoutes);
app.use("/api/emails", emailRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
