const express = require('express');
const router = require('./routes/route1')
const app = express();

app.set('view engine','pug');
app.set('views', 'views');

app.use(express.urlencoded({
    extended: false
}))
app.use(router)
app.listen(8000, () => {
    console.log('server run at port 8000')
})