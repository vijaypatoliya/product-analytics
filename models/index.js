require('dotenv').config()
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const option = {
  reconnectInterval: 0,
  socketTimeoutMS: 100000,
  connectTimeoutMS: 100000,
  useNewUrlParser: true,
  useUnifiedTopology: true
}
const connectionString = process.env.dbURL || 'mongodb://localhost:27017/meditation'
mongoose.connect(connectionString, option)
let db = mongoose.connection

db.on('error', (error) => {
  console.log('Error while connecting to mongodb database:', error)
})

db.once('open', () => {
  console.log('Successfully connected to mongodb database')
})

db.on('disconnected', () => {
  console.log('Disconnected to mongodb database')
  mongoose.connect(connectionString, option)
  db = mongoose.connection
})
