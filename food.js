var Postmates = require('postmates');
var Search = require('grubhub-api').Search;

var something = require('./index.js'); 

var postmates = new Postmates('cus_LA6qb6Kk8WimL-','8fe2217c-cea8-4857-ae44-08c8ff460b0f');

const Zomato = require('zomato.js');
const z = new Zomato('81a2f5a31cd718b2ade567544077f75d');


var delivery = {
  pickup_address: "20 McAllister St, San Francisco, CA",
  dropoff_address: "101 Market St, San Francisco, CA"
};

postmates.quote(delivery, function(err, res) {
    console.log("delivery fee: ");
  console.log(res.body.fee); // 799
});


var delivery = {
  manifest: "a box of kittens",
  pickup_name: "The Warehouse",
  pickup_address: "20 McAllister St, San Francisco, CA",
  pickup_phone_number: "555-555-5555",
  pickup_business_name: "Optional Pickup Business Name, Inc.",
  pickup_notes: "Optional note that this is Invoice #123",

  dropoff_name: "Alice",
  dropoff_address: "101 Market St, San Francisco, CA",
  dropoff_phone_number: "415-555-1234",
  dropoff_business_name: "Optional Dropoff Business Name, Inc.",
  dropoff_notes: "Optional note to ring the bell",
  //quote_id: "qUdje83jhdk"
};


postmates.new(delivery, function(err, res) {
   //console.log(res.body);
});


postmates.list('ongoing', function(err, res) {
    //console.log(res.body);
    // `res.body` is an array of Delivery objects
});


//postmates.get('qUdje83jhdk', function(err, res) {
//    console.log("getting dilvery: ");
//    console.log(res.body.status); // "pickup"
//});


/**  TRASH GRUB HUB
var search = new Search('60 Washington Square S, New York, NY 10012');

search.run({perPage: 15, page: 1}, function(err, results) {
  results.forEach(function(restaurant) {
    console.log(
      "Restaurant %s is %d miles away, has a rating of %d",
      restaurant.name, restaurant.distance, restaurant.grubhubRating
    );
  });
});
**/


console.log("full name: ", something.fullname); 

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}
var rand = randomInt(1, 10); 
console.log(rand); 


z.search({  //q: 'Leopold Cafe & Bar',
    count: 10
  })
  .then(function(data) {
    console.log("----Random Resturaunt-------"); 
    var randrest = data[rand];
    
    console.log("Name: ", randrest.name, randrest.location.address); 
  })
  .catch(function(err) {
    console.error(err);
  });
