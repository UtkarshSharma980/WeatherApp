const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.get('/', (req,res)=>{
    res.send("Hello, this is Backend");
})

const weather = require('./routes/weather');
app.use('/weather', weather);


app.listen(5000);
