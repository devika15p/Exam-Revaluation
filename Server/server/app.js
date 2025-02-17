const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect("mongodb://localhost:27017/revaluation")
  .then(console.log("working"))
  .catch((error) => {
    console.log(error)
  })

app.use(cors());
app.use(express.json());

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send("we are working on 8000")
})

const route = require('./route');
app.use('/', route);

// Start the server
app.listen(8000, () => {
  console.log("Running on localhost 8000");
});
