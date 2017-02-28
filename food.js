var Postmates = require('postmates');
var Search = require('grubhub-api').Search;

var postmates = new Postmates('cus_LA6qb6Kk8WimL-','8fe2217c-cea8-4857-ae44-08c8ff460b0f');

var stuff = require("./index.js");

const Zomato = require('zomato.js');
const z = new Zomato('81a2f5a31cd718b2ade567544077f75d');




/**  POST MATES EXTRA SHIT
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

**/



function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}
var rand = randomInt(1, 10);
console.log(rand);


var deltime = "30 - 40 minutes";
var restname;
var restrating;
var totalcost;

var rest_cost;
// -----------ZOMATO------------


z.search({
    count: 10
  })
  .then(function(data) {
    console.log("----Random Resturaunt-------");
    var randrest = data[rand];
    //console.log(randrest);
    console.log("Name: ", randrest.name, randrest.location.address);

    totalcost = randrest.average_cost_for_two;
    restname = randrest.name;
    restrating = randrest.user_rating.aggregate_rating;
  })
  .catch(function(err) {
    console.error(err);
  });


// ---------- POSTMATES --------------

var delivery = {
  pickup_address: "20 McAllister St, San Francisco, CA",
  dropoff_address:  "20 McAllister St, San Francisco, CA" //dropoff_address: stuff.address+", "+stuff.city+", "+stuff.state
};

postmates.quote(delivery, function(err, res) {
    console.log("delivery fee: ");
    console.log(res.body.fee); // 799
    totalcost += res.body.fee;
    console.log("Total cost: ");

    console.log(totalcost);


module.exports.deltime = deltime;
module.exports.restname = restname;
module.exports.restrating = restrating;
module.exports.totalcost = totalcost;

module.exports.resSearch = z.search();


});
