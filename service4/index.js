const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// MongoDB Connection
const dbURI = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}`;

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });

// Define a Mongoose model
const Item = mongoose.model(
  "Item",
  new mongoose.Schema({
    name: String,
    value: Number,
  })
);

// Test Route
app.get("/api/service4", async (req, res) => {
  try {
    const items = await Item.find(); // Query the database
    res.json(items); // Send the data as JSON
  } catch (error) {
    res.status(500).json({ error: "An error occurred while retrieving data." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
