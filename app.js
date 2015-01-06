var lab1_1 = require("./lab/lab1_1").lab;
var example_1 = require("./example_1").lab;
var lab2 = require("./lab/lab2").lab;
var lab2_2 = require("./lab/lab2_2").lab;
var lab3 = require("./lab/lab3_1").lab;
var PORT = 8080;


var urlMap = [
	{path: "/", action:__dirname + "/static/index.html"},	 
	{path: "/digest", action: lab1_1},	
	{path: "/example_1", action: example_1}, 
	{path: "/lab2", action: lab2},
	{path: "/runInstance", action: lab2_2},
	{path: "/lab3", action: lab3},
];

var service = require("./lib/service").http(urlMap);

service(PORT);

