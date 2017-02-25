var express = require('express');

var app = express();

app.disable('x-powered-by');

var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(require('body-parser').urlencoded({
  extended: true}));

var credentials = require('./credentials.js');
app.set(require('cookie-parser')(credentials.cookieSecret));


app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/order', function(req, res) {
  res.render('order',{ csrf: 'CSRF token here'});
});

app.get('/thankyou', function(req, res) {
  res.render('thankyou');
});

app.post('/process', function(req, res){
  console.log('Form' + req.query.form);
  console.log('CSRF token : ' + req.body._csrf);
  console.log('Email : ' + req.body.fullname);
  console.log('Email : ' + req.body.email);
  console.log('Email : ' + req.body.address);
  console.log('Email : ' + req.body.city);
  console.log('Email : ' + req.body.state);
  console.log('Email : ' + req.body.zipcode);
  console.log('Email : ' + req.body.phoneNumber);
  res.redirect(303, '/thankyou');
});




app.get('/junk', function(req, res, next) {
  console.log('Tried to touch my /junk');
  throw new Error('/junk doesnt\'t exist');
});

app.use(function(err, req, res, next) {
  console.log('Error: '+ err.message);
  next();
});

app.use(function(req, res){
  res.type('text/html');
  res.status(404);
  res.render('404');
});




app.listen(app.get('port'), function(){
  console.log('DESZ NUTS');
});
