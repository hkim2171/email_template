// First at the top of your routes.js file you'll have to require the controller
var friends = require('./../server/controllers/friends.js');
var orders = require('./../server/controllers/orders.js');
var products = require('./../server/controllers/products.js');
var bodyparser = require('body-parser');

	// note how we are delegating to the controller and passing along req and res
// This is our routes.js file located in /config/routes.js
  // This is where we will define all of our routing rules!
  // We will have to require this in the server.js file (and pass it app!)
 module.exports = function(app) {
 	app.use(bodyparser.json());
   	app.get('/friends', function(req, res) {
   		friends.show(req, res);
   	})
   	app.get('/orders', function(req,res){
   		orders.show(req,res);
   	})
   	app.get('/products', function(req,res){
   		products.show(req,res);
   	})
   	app.post("/remove/:id", function(req,res){
   		friends.remove(req,res);
   	})
   	app.post('/addfriend', function(req,res){
   		friends.addFriend(req,res);
   	})
   	app.post('/addorder', function(req,res){
   		orders.addOrder(req,res);
  	})
   	app.post('/addproduct', function(req,res){
   		products.addProduct(req,res);
   	})
    app.post("/removeorder/:id", function(req,res){
   	orders.delete(req,res);
   	})
 };

