const express = require('express')
const familyController = require('../controllers/FamilyCardController')

const router = express.Router()
router.use(express.static('public'))


router.get('/fam-card', familyController.index);

router.get('/fam-card/create', familyController.create);

router.post('/fam-card/store', familyController.store);
router.get('/home', (req, res) => {
    res.render('layouts/master')
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