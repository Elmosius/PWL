const express = require('express');
const router = express.Router();
router.get('/page01',(req, res)=>{
    console.log('Middleware 02')
    res.send(`
    <h1>First Page</h1>
    <form method="post" action="/page02">
    <label for="name_id">Name</label>
    <input type="text" name="name" id="name_id" autofocus>
    <button type="submit">Submit</button>
</form>
    `)
})

router.post('/page02',(req, res)=>{
    console.log('Middleware 03')
    console.log(req.body)
    res.send(`
    <h1>Second Page</h1>
    <p>Hello, ${req.body.name}</p>
    
    
    `)
})
router.get('/',(req, res)=>{
    console.log('Middleware 01')
    res.send(`
    <h1>Dashboard</h1>
    `)
})

module.exports = router

