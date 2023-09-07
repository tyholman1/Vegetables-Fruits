const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const fruits = require('./models/fruits');
const vegetables = require ('./models/vegetables')

const jsxViewEngine = require('jsx-view-engine');

app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());

// Middleware;
app.use((req, res, next) => {
  console.log('Middleware: I run for all routes, 1');
  next();
});
// By implementing the line below, we now have access to the req.body. Which is the parsed formData from the form request.
app.use(express.urlencoded({ extended: false }));

// const middleware = (req, res, next) => {
//   console.log('Middleware: I run for all routes, 1');
//   next();
// };

// Index
app.get('/fruits', (req, res) => {
  console.log('Index controller');
  res.render('fruits/Index', { fruits });
});

//Vegetables Index
app.get('/vegetables', (req, res) => {
  // console.log('Index controller');
  res.render('vegetables/Index', { vegetables });
});


// New
app.get('/fruits/new', (req, res) => {
  console.log('New controller');
  res.render('fruits/Index', {fruits});
});

app.get('/vegetables/new', (req, res) => {
  console.log('New Index');
  res.render('vegetables/new', {vegetables});
});


// Delete

// Update

// Create
app.post('/fruits', (req, res) => {
//   console.log(req.body);
req.body.readyToEat = req.body.readyToEat === "on"

fruits.push(req.body)
console.log(fruits)
  res.redirect('/fruits') // sends the user back to /fruits
});

app.post('/vegetables', (req, res) => {
  //   console.log(req.body);
  req.body.readyToEat = req.body.readyToEat === "on"
  
  vegetables.push(req.body)
  console.log(vegetables)
    res.redirect('/vegetables') // sends the user back to /vegetables
  });
// Edit

// Show
app.get('/fruits/:id', (req, res) => {
  //second param of the render method must be an object
  res.render('fruits/Show', {
    //there will be a variable available inside the jsx file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    fruit: fruits[req.params.id],
  });
});

app.get('/vegetables/:id', (req, res) => {
  //second param of the render method must be an object
  res.render('vegetables/Show', {
    //there will be a variable available inside the jsx file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    vegetables: vegetables[req.params.id],
  });
});




app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});