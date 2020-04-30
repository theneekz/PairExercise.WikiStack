const express = require('express');
const app = express();
const morgan = require('morgan');
const { main } = require('./views');
const { db } = require('./models');

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send(main());
});

const PORT = 3000;

db.authenticate().then(() => {
  console.log('Connected to the database');
});

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
