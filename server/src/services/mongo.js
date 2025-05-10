const mongoose = require('mongoose');

require('dotenv').config();

// Update below to match your own MongoDB connection string.
// const MONGO_URL = "mongodb://localhost:27017"

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect('mongodb://127.0.0.1:27017/nasa');
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
}