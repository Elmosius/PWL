const express = require('express');
const app = express();

// buat middleware
app.use((req, res,next) => {
    console.info('Middleware 01')
    next();
})

// buat middleware 2
app.use((req, res) => {
    console.info('Middleware 02')
    res.send(`
        <h1>Welcome to Express </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid omnis pariatur quia temporibus totam veniam? Asperiores consequatur esse suscipit.</p>
    `)
})
app.listen(8000, () => {
    console.log('server run at port 8000')
})