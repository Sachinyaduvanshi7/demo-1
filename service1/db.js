const { MongoClient } = require("mongodb");
const url = "mongodb://host.docker.internal:27017";
const dbName = "mydb";
let db;

async function connectDB() {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = client.db(dbName);
  console.log("Connected to MongoDB");
}

function getDB() {
  if (!db) throw new Error("Database not initialized");
  return db;
}

module.exports = { connectDB, getDB };
