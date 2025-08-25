const express = require('express');
const app = express();
const Usermodel = require('./models/user');
const connect = require('./config/db');
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', (req, res) => {
    res.sendFile('index.html',{root:__dirname});
});
app.get('/Shop', (req, res) => {
    res.sendFile('Shop.html',{root:__dirname});
});
app.get('/Contact', (req, res) => {
    res.sendFile('Contact.html',{root:__dirname});
});
app.get('/Sign', (req, res) => {
    res.sendFile('Sign.html',{root:__dirname});
});
app.post('/Sign', async (req, res) => {
    const { Username, password } = req.body;
    await Usermodel.create({ 
        Username:Username,
        password:password });
        res.send("user created");
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});         