const express = require('express');
const app = express();

app.user(express.urlencoded({
    extended: false
}))
app.use('/page01',(req, res)=>{
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

app.use('/page02',(req, res)=>{
    console.log('Middleware 03')
    console.log(req.params)
    res.send(`
    <h1>Second Page</h1>
    
    `)
})
app.use('/',(req, res)=>{
    console.log('Middleware 01')
    res.send(`
    <h1>Dashboard</h1>
    `)
})




app.listen(8000, () => {
    console.log('server run at port 8000')
})