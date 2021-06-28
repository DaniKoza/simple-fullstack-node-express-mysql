const express = require('express');
const app = express();
const morgan = require('morgan'); // logging
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const dbService = require('./dbService');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// create
app.post('/insert', (req, res) => {
    console.log(req.body);
});

// read
app.get('/getAll', (req, res) => {
    const dataBase = dbService.getDbServiceInstance();
    const result = dataBase.getAllData();
    // console.log(result);
    result
        .then(data => res.json({ data: data }))
        .catch(err => console.log(err));
});


// update

// delete

// handle unknown paths
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});


app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

app.listen(process.env.PORT, () => console.log('app is running'));