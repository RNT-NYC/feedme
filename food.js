var Postmates = require('postmates');
var Search = require('grubhub-api').Search;

var postmates = new Postmates('cus_LA6qb6Kk8WimL-','8fe2217c-cea8-4857-ae44-08c8ff460b0f');

var stuff = require("./index.js");

var delivery = {
  pickup_address: "20 McAllister St, San Francisco, CA",
  dropoff_address: dropoff_address: stuff.address+", "+stuff.city+", "+stuff.state
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

  dropoff_name: stuff.fullname,
  dropoff_address: stuff.address+", "+stuff.city+", "+stuff.state,
  dropoff_phone_number: stuff.phoneNumber,
  dropoff_notes: stuff.notes,
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

var search = new Search('60 Washington Square S, New York, NY 10012');

search.run({perPage: 15, page: 1}, function(err, results) {
  results.forEach(function(restaurant) {
    console.log(
      "Restaurant %s is %d miles away, has a rating of %d",
      restaurant.name, restaurant.distance, restaurant.grubhubRating
    );
  });
});
