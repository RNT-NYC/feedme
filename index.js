var express = require('express');

var app = express();

app.disable('x-powered-by');

var handlebars = require('express-handlebars').create({
  defaultLayout: 'main'
});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(require('body-parser').urlencoded({
  extended: true
}));

var credentials = require('./credentials.js');
app.set(require('cookie-parser')(credentials.cookieSecret));


app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/order', function(req, res) {
  res.render('order', {
    csrf: 'CSRF token here'
  });
});


app.get('/thankyou', function(req, res) {
  var foodres = require('./food.js')
  res.render('thankyou', {
    deltimes: 'hi',
    restname: 'hi',
    restrating: 'hi',
    totalcost: 'hi'
  });
});

app.post('/process', function(req, res) {
  console.log('Form' + req.query.form);
  console.log('CSRF token : ' + req.body._csrf);
  console.log('Fullname : ' + req.body.fullname);
  exports.fullname = "somethinggg"; //req.body.fullname;
  console.log('Email : ' + req.body.email);
  exports.email = req.body.email;
  console.log('Address : ' + req.body.address);
  exports.address = req.body.address;
  console.log('City : ' + req.body.city);
  exports.city = req.body.city;
  console.log('State : ' + req.body.state);
  exports.state = req.body.state;
  console.log('Zip Code : ' + req.body.zipcode);
  exports.zipcode = req.body.zipcode;
  console.log('phoneNumber : ' + req.body.phoneNumber);
  exports.phoneNumber = req.body.phoneNumber;
  console.log('Notes : ' + req.body.notes);
  exports.notes = req.body.notes;
  res.redirect(303, '/thankyou');
});


app.get('/junk', function(req, res, next) {
  console.log('Tried to touch my /junk');
  throw new Error('/junk doesnt\'t exist');
});

app.use(function(err, req, res, next) {
  console.log('Error: ' + err.message);
  next();
});

app.use(function(req, res) {
  res.type('text/html');
  res.status(404);
  res.render('404');
});


app.listen(app.get('port'), function() {
  console.log('DESZ NUTS');
});
