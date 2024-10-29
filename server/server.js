const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//app middleware
app.use(bodyParser.json());
app.use(cors());

const PORT = 8000;

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});