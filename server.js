const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');

const path = __dirname + '/app/views/';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded( { extended: true }));
app.use(express.static(path));

app.use("/", require('./app/routes/routes.js'))

app.get('/', function (req,res) {
    res.sendFile(path + "index.html");
  });

const mongoose = require('mongoose');

mongoose.set('strictQuery', false)
mongoose.connect(process.env.Database)

app.listen(3000, 'localhost', () => {
    console.log(`listening on 3000`);
})
