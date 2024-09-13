const express = require("express");
const cors = require("cors");
const { connectDB, getDB } = require("./db"); // Import the DB connection module

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Connect to the MongoDB database
connectDB()
  .then(() => {
    console.log("MongoDB connected. Microservice is ready to handle requests.");

    // Example API route that fetches data from MongoDB
    app.get("/api/service1", async (req, res) => {
      try {
        const db = getDB();
        const data = await db.collection("items").find().toArray();
        res.json(data);
      } catch (error) {
        console.error("Error fetching data from MongoDB", error);
        res.status(500).send("Error fetching data");
      }
    });

    // Start the Express server after DB connection is ready
    app.listen(port, () => {
      console.log(`Service1 is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database", error);
  });
