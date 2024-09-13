const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
const port = 5001; // Use a different port for this service

app.use(cors());
app.use(express.json());

const uri = "mongodb://host.docker.internal:27017"; // MongoDB connection URI
const client = new MongoClient(uri);

app.use(express.json());

app.get("/api/service2", async (req, res) => {
  try {
    await client.connect();
    const database = client.db("testDB"); // Replace with your database name
    const collection = database.collection("service2Collection"); // Replace with your collection name
    const data = await collection.find({}).toArray();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Service2 listening at http://localhost:${port}`);
});
