'use-strict'

require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('hello')
});

app.get('/dashboard', (req, res) => {
    res.json({
        msg: 'GOOD',
        status: 200
    })
});

app.listen(PORT, () => {
    console.log(`Now listening reqeuest on PORT: ${PORT}`);
});