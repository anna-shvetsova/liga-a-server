const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes.js');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.get('/', (req, res) => res.send('Welcome to Express'));

app.listen(() => {
    console.log('Server running');
});

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use('/api', apiRoutes);

app.use((err, req, res, next) => {
    return res.status(500).json({
        status: 'error',
        message: err.message
    });
});

const dbPath = 'mongodb+srv://dbAdmin:***@annacluster.slgjw.mongodb.net/test?retryWrites=true&w=majority&ssl=true';
const options = { useUnifiedTopology: true }

mongoose.connect(dbPath, options)
    .then(() => {
        console.log('db connected')
    })
    .catch((err) => {
        console.log(err.message)
    });

