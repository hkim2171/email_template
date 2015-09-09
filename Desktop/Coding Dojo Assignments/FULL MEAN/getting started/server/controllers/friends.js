// this is our friends.js file located at /server/controllers/friends.js
// This is the friend.js file located at /server/models/friend.js
// We want to create a file that has the schema for our friends and creates a model that we can then call upon in our controller
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

// notice that we aren't exporting anything -- this is because this file will be run when we require it using our config file and then since the model is defined we'll be able to access it from our controller
// note the immediate function and the object that is returned
module.exports = (function() {
  return {
    show: function(req, res) {
      Friend.find({}, function(err, results){
      	if(err){
      		console.log(err);
      	} else {
      		console.log(results);
      		res.json(results);
      	}
      })
    },

    addFriend: function(req,res){
      var friend = new Friend({name: req.body.name, age: req.body.age});
      friend.save(function(err){
        if(err){
          console.log('you did not add your friend correctly!');
        } else {
          console.log('you added your friend successfully!');
        }
      })
    },

    remove: function(req,res){
      Friend.remove({_id:req.params.id}, function(err){
        if(!err){
          res.json('');
        }
      });
    }
  }
})();