const express = require('express');
const app = express();
const morgan = require('morgan');
const { main } = require('./views');

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send(main());
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
