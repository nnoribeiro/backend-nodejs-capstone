// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = `${process.env.MONGO_DB}`;

async function connectToDatabase() {
    if (dbInstance){
        return dbInstance
    };

    const client = new MongoClient(url);      

    try {
        // Task 1: Connect to MongoDB
        await client.connect();
        console.log("Connected successfully to server");

        // Task 2: Connect to database secondChance and store in variable dbInstance
        dbInstance = client.db(dbName);

        // Task 3: Return database instance
        return dbInstance
    } catch (err) {
        console.error(err);
    } finally {
        // Close the connection
        await client.close();
    }    
}

module.exports = connectToDatabase;
