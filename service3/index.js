// server.js - Service 3
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

// Sample data hardcoded
const data = [
  {
    id: 1,
    name: "Service 3 Data1",
    description: "This is data from service 3 stored directly in the code.",
  },
  {
    id: 2,
    name: "Service 3 Data2",
    description: "This is data from service 3 stored directly in the code.",
  },
  {
    id: 3,
    name: "Service 3 Data3",
    description: "This is data from service 3 stored directly in the code.",
  },
  {
    id: 4,
    name: "Service 3 Data4",
    description: "This is data from service 3 stored directly in the code.",
  },
  {
    id: 5,
    name: "Service 3 Data5",
    description: "This is data from service 3 stored directly in the code.",
  },
];

// Endpoint to return data
app.get("/api/service3", (req, res) => {
  res.json(data);
});

// Start the server on port 5002
const PORT = 5002;
app.listen(PORT, () => {
  console.log(`Service 3 running on http://localhost:${PORT}`);
});
