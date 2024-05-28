const express = require('express')

const router = express.Router()
router.use(express.static('public'))

router.get('/home', (req, res) => {
    res.render('layouts/master')
})

router.get('/fam-card', (req, res) => {
   res.render('family_card/index',{
       famCards:[
           {
               id: '000001', name: 'John Doe'
           },
           {
               id: '000002', name: 'Richard Max'
           },
       ]
   })
})
router.get('/page01', (req, res) => {
    // res.sendFile(path.join(__dirname, '../views', 'form.html'))
})

router.post('/page02', (req, res) => {
    res.send(`
        <h1>Second Page</h1>
        <p>Hello, nice to meet you ${req.body.name}</p>    
    `)
})

router.get('/', (req, res) => {
    res.render('starter')
})

module.exports = router