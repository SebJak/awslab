//Running instance and geting public IP nad DNS from instace.
/*
		//if(data.Reservations[0].Instances[0].NetworkInterfaces[0].Association.PublicIp){
		//	  console.log(data.Reservations[0].Instances[0].NetworkInterfaces[0].Association.PublicIp);
		//	callback(null, data.Reservations[0].Instances[0].NetworkInterfaces[0].Association.PublicIp);
		//}
		//else{
		*/

var AWS = require('aws-sdk');

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
					getInstanceInfo(data.Instances[0].InstanceId);
				}
				else{
					callback(null, data);
				} 
			//callback(null, data); 
			}        // successful response
	});
	

	
}

var paramsLunchInstance = {
  ImageId:  "ami-4983d779", /* required */
  MaxCount: 1, /* required */
  MinCount: 1, /* required */
  InstanceInitiatedShutdownBehavior: 'stop',

  InstanceType: 't1.micro',
  //KernelId: 'STRING_VALUE',
  Monitoring: {
    Enabled: true
  },
 KeyName: 'sebastian.jakowski',
DisableApiTermination: false,
SecurityGroupIds: [
   'sg-3ddea658',
    /* more items */
  ],
  Placement: {
    AvailabilityZone: 'us-west-2c',
  },
};


var getInstanceInfo = function(instanceId){

 params = {
	DryRun: false,
	Filters: [
	{
		Name: 'instance-id',
		Values:[
			instanceId,
		],
	
	}
	};

	new AWS.EC2().describeInstances(params, function(err, data) {
	  if (err) {
		  	console.log(err, err.stack);
		  	callback(err, null); 
	  	}
	  else{
			callback(null, data);
		}           // successful response
	});
	
};

exports.lab = task
