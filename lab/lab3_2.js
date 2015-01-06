
var AWS = require('aws-sdk');
var autoscaling = new AWS.AutoScaling();

AWS.config.loadFromPath('./config.json');

var task =  function(request, callback){
	new AWS.EC2().runInstances( paramsLunchInstance,
		function(err, data) {
			if (err) {
				console.log(err, err.stack);
				callback(err, null); 
			}
			else{
				if(data.Instances[0].InstanceId){
					console.log(data.Instances[0].InstanceId);
					getInstanceInfo(data.Instances[0].InstanceId, callback);
				}
				else{
					callback(null, data);
				} 
			//callback(null, data); 
		} 
	});
	

	
}

var paramsLunchInstance = {
	ImageId:  "ami-4983d779", /* required */
	MaxCount: 1, /* required */
	MinCount: 1, /* required */
	InstanceInitiatedShutdownBehavior: 'stop',

	InstanceType: 't1.micro',
	Monitoring: {
		Enabled: true
	},
	KeyName: 'sebastian.jakowski',
	DisableApiTermination: false,
	SecurityGroupIds: [
	'sg-3ddea658',
	],
	Placement: {
		AvailabilityZone: 'us-west-2c',
	},

};

exports.lab = task


