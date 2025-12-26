const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const dotenv = require('dotenv')
dotenv.config()

const bodyparser = require('body-parser')
app.use(bodyparser.json())

const cors = require('cors')
app.use(cors())


// or as an es module:
// import { MongoClient } from 'mongodb'
const { MongoClient } = require('mongodb');
// Connection URL
const client = new MongoClient(process.env.MONGO_URI);

// Database Name
const dbName = 'passwordManager';

client.connect()
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('MongoDB connection error:', err));

// Get all the passwords
app.get('/', async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection('passwords')
  const findResult = await collection.find({}).toArray();
  res.json(findResult)
})

// Save a password
app.post('/', async (req, res) => {
  const password = req.body  
  const db = client.db(dbName);
  const collection = db.collection('passwords')
  const findResult = await collection.insertOne(password);
  res.send({success: true, result: findResult})
})

// Delete a password by id
app.delete('/', async (req, res) => {
  const password = req.body  
  const db = client.db(dbName);
  const collection = db.collection('passwords')
  const findResult = await collection.deleteOne(password);
  res.send({success: true, result: findResult})
})

app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`)
})
