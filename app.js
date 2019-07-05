var express = require('express')

var app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.get('/', (req,res,next)=> {
    res.render('main')
})

app.use('/', (req,res,next)=> {
    res.render('404')
})

// app.get()

app.listen(3333)