const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const { isTypedArray } = require('util/types');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

// ...

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index');
})

const beers = punkAPI.getBeers({'abv_It' : 25})

app.get('/beers', (req, res) => {
  beers.then(beersFromApi => 
    res.render('beers')
  )
  .catch(error => console.log(error));
})

app.get('/randombeers', (req, res) => {
  res.render('index')
})


app.listen(3000, () => console.log('🏃‍ on port 3000'));
