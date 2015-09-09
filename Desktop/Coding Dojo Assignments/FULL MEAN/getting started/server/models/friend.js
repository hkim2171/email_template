var mongoose = require('mongoose');
// create our friendSchema
var FriendSchema = new mongoose.Schema({
  name: String,
  age: Number
});

var OrderSchema = new mongoose.Schema({
	name: String,
	quantity: Number,
	product: String,
	created_at: { type: Date, default: Date.now }
});

var ProductSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	quantity: Number
})
// use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural)
mongoose.model('Friend', FriendSchema);
mongoose.model('Order', OrderSchema);
mongoose.model('Product', ProductSchema);