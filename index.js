const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');
const { routes } = require('./src/routes');

// Set connection to DB
mongoose.connect(
    'mongodb+srv://gleb_chetvertak:Martochka1998@cluster0.7pddo.mongodb.net/glebity-admin-panel',
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }
);

// Initialize app
const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

routes.forEach((item) => {
    app.use(`/api/${item}`, require(`./src/routes/${item}`))
})

// Define routes
http.createServer({}, app).listen(3000);