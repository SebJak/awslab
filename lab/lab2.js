var AWS = require('aws-sdk');

var ip = require('ip');

AWS.config.loadFromPath('./config.json');


var task =  function(request, callback){
	new AWS.EC2().describeInstances(params, function(err, data) {
	  if (err) {
	  	console.log(err, err.stack);
	  	callback(err, null); 
	  	}// an error occurred
	  else{
		//if(data.Reservations[0].Instances[0].NetworkInterfaces[0].Association.PublicIp){
		//	  console.log(data.Reservations[0].Instances[0].NetworkInterfaces[0].Association.PublicIp);
		//	callback(null, data.Reservations[0].Instances[0].NetworkInterfaces[0].Association.PublicIp);
		//}
		//else{
			callback(null, data);
		//	console.log(data);
		//}
		}           // successful response
	});
	

	
}

var params = {
	DryRun: false,
	Filters: [
	{
		Name: 'network-interface.addresses.private-ip-address',
		Values:[
			ip.address(),
		],
	
	},
	/* more items */
	],
	/*InstanceIds: [
		'i-c848f4c4',
	],*/
//	MaxResults: 10,
	//NextToken: 'STRING_VALUE'
};


exports.lab = task
