const express = require('express');
const app = express();
const router = require('./routes/route')


app.use(express.urlencoded({
    extended: false
}))
app.use(router)
app.listen(8000, () => {
    console.log('server run at port 8000')
})