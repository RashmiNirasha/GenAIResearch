const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//app middleware
app.use(bodyParser.json());
app.use(cors());

const PORT = 8000;
const DB_URL = `mongodb+srv://rashini:rashini123@baselmsbackend.xhyvv.mongodb.net/?retryWrites=true&w=majority&appName=BaseLMSBackend`;

mongoose.connect(DB_URL)
.then(()=>{
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err));


app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});