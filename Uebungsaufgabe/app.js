var http = require('http');
var server = http.createServer();
var fs = require('fs');



var gebauede;
fs.readFile(__dirname+"/staedte.json", function(err,data){
 gebauede = JSON.parse(data);
for(var i=0; i<gebauede.staedte.length;i++){
    console.log("Stadt: "+gebauede.staedte[i].name);
    console.log("Land: "+gebauede.staedte[i].country);
    console.log("Groeße: "+gebauede.staedte[i].population);
    console.log("-----------------------------");
    
}
 

});

