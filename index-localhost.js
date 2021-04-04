const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes.js');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.get('/', (req, res) => res.send('Welcome to Express'));

app.listen(port, () => {
    console.log("Running server on port " + port);
})

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
const options = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(dbPath, options)
    .then(() => {
        console.log('db connected')
    })
    .catch((err) => {
        console.log(err.message)
    });

