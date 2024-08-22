const express  = require('express');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();
require('express-async-errors');
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(xss());

app.use(
    rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 100
    })
);

const start = () => {
    try {
        app.listen(port, () => {console.log(`Listening on port ${port}`)})
    } catch (error) {
        console.log(error);
    }
}

start();