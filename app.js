const express = require('express')
const morgan = require('morgan')
const app = express()
const index = require("./views/index");
const bodyParser = require('body-Parser')
const { db, Page, User } = require('./models');
const wiki = require("./routes/wiki")
const users = require("./routes/users")
let PORT = 3000;
const layout = require('./views/layout');


app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));


app.use(express.static(__dirname + "/public"));

// app.use('/main', require('./views/main'))
app.use('/wiki', wiki)
app.use('/users', users)

app.get('/', (req, res, next) => {
  res.redirect('/wiki');
})

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })



const init = async () => {
  await db.sync({ force: true })
  //await  Page.sync( {force: true} )
  //await  User.sync( {force: true} )
  console.log('hi')


}


init()

app.listen(PORT, () => {
  console.log(`listening from ${PORT}`)
})

