const express = require('express')
const app = express()

app.use(express.static('dist'))

app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))