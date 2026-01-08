const router = require('./routes/contact')
const  exp = require('express')
const app = exp()
const Port=3000

app.use('/contact',router)

app.listen(Port)