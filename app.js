const express = require('express')
const morgan = require('morgan')
const app = express()
const index = require("./views/index");
const bodyParser = require('body-Parser')

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

// app.use(express.static('views'))
app.use(express.static(__dirname + "/public"));

app.use('/main', require('./views/main'))

app.get('/', (req, res, next) => {
    res.redirect(`/index`);
})
let PORT = 3000
app.listen(PORT, () => {
    console.log(`listening from ${PORT}`)
})
