const express = require('express')
const routes = require('./routes/index');
const path = require('path')

const app = express();
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static('public'))

app.use('/', routes);

app.listen(3000, function() {
  console.log('server started on 3000')
})