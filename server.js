require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db");

const app = express();

const PORT = process.env.PORT || 5000;

// Connect DB
connectDB();

// Routes
const authRoute = require("./routes/auth");

app.use(express.json());

app.use("/api/v1/auth", authRoute);

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});
