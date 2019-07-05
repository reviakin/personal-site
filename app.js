var express = require('express')

var app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.get('/', (req,res,next)=> {
    res.render('main')
})

app.listen(3333)