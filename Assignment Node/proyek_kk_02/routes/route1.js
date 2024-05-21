const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/home', (req, res) => {
    console.log('Home');
    const filePath = path.join(__dirname, '..', 'views', 'index.html');
    res.sendFile(filePath);
});
router.get('/page01', (req, res) => {
    console.log('Middleware 02')
    res.send(`
    <h1>First Page</h1>
    `)
})

router.post('/page02', (req, res) => {
    console.log('Middleware 03')
    console.log(req.body)
    res.send(`
    <h1>Second Page</h1>
    <p>Hello, ${req.body.name}</p>
    `)
})
router.get('/', (req, res) => {
    console.log('Middleware 01')
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html' ))
})

module.exports = router

