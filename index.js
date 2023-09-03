const express = require('express');
const app = express();

const MsgRouter = require('./routes/Msg');
const dotenv = require('dotenv').config();

app.use(express.json());
app.use('/api/msg', MsgRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});