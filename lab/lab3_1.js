
var AWS = require('aws-sdk');
var autoscaling = new AWS.AutoScaling();

AWS.config.loadFromPath('./config.json');

var task =  function(request, callback){
console.log("Lab 3");
	autoscaling.setDesiredCapacity(params, function(err, data) {
	  if (err) console.log(err, err.stack); // an error occurred
	  else     console.log(data);           // successful response
	});
	
}


var params = {
  AutoScalingGroupName: 'JakowskiASG', /* required */
  DesiredCapacity: 2, /* required */
}; 

exports.lab = task
