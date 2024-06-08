const express = require('express');
const connect = require ('./Common/common');
const router = require('./Routes/routes');
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
connect();

const port=1000;

app.listen(port, ()=>{
    console.log("server run on:",port);
})