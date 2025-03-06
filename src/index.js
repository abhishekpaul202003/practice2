const express = require('express');
const mongooes = require('mongoose');
const multer = require('multer');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

const port = 8080 || process.env.port;

mongooes.connect(process.env.MongoDBURL)

    .then(() => { console.log('mongoDB is connected') })
    .catch((error) => { console.log(error) })

    app.listen(port,()=>{console.log(`server is running on port ${port}`);}); 