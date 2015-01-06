
var AWS = require('aws-sdk');
//var autoscaling = new AWS.AutoScaling();

AWS.config.loadFromPath('./config.json');

var task =  function(request, callback){
console.log("Lab 3");
	 new AWS.AutoScaling().setDesiredCapacity(params, function(err, data) {
	  if (err) callback(err, null); // an error occurred
	  else     callback(null,data);           // successful response
	});
	
}


var params = {
  AutoScalingGroupName: 'JakowskiASG', /* required */
  DesiredCapacity: 2, /* required */
}; 

exports.lab = task
