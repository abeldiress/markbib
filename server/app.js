const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3000;
const api = require('./src/routes/index');

dotenv.config();

const app = express();

// enables cross origin resource sharing
app.use(cors());

// parses objects in response into json 
app.use(bodyParser.json());

// main api router
app.use('/api', api);

// Connect to DB
mongoose.connect(
  process.env.DB_CONN_STRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('connected to db!')
    }   
  }
);

// Listening
app.listen(port, () => {
  console.log('Server started successfully!');
});
