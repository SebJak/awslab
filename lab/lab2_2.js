//Running instance and geting public IP nad DNS from instace.
/*
		//if(data.Reservations[0].Instances[0].NetworkInterfaces[0].Association.PublicIp){
		//	  console.log(data.Reservations[0].Instances[0].NetworkInterfaces[0].Association.PublicIp);
		//	callback(null, data.Reservations[0].Instances[0].NetworkInterfaces[0].Association.PublicIp);
		//}
		//else{
		*/

var AWS = require('aws-sdk');

var ip = require('ip');

AWS.config.loadFromPath('./config.json');


var task =  function(request, callback){
	new AWS.Request().runInstances(params,
		function(err, data) {
		  if (err) {
			  	console.log(err, err.stack);
			  	callback(err, null); 
		  	}
		  else{
		  		if(data.Reservations[0].Instances[0].NetworkInterfaces[0].Association.PublicIp){
				  	console.log(data.Reservations[0].Instances[0].NetworkInterfaces[0].Association.PublicIp);
					callback(null, data.Reservations[0].Instances[0].NetworkInterfaces[0].Association.PublicIp);
				}
				else{
					callback(null, data);
				}  
			}        // successful response
	});
	

	
}

var params = {
  ImageId: 'i-f48078fa', /* required */
  MaxCount: 1, /* required */
  MinCount: 1, /* required */
  
  ClientToken: 'STRING_VALUE',
  InstanceType: 't1.micro',
  KernelId: 'STRING_VALUE',
  KeyName: 'STRING_VALUE',
  Monitoring: {
    Enabled: true
  },
  Placement: {
    AvailabilityZone: 'us-west-2c',
  },
};


exports.lab = task