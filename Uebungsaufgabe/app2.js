var http = require('http');
var server = http.createServer();
var fs = require('fs');
var chalk = require('chalk');


var gebauede;
fs.readFile(__dirname+"/staedte.json", function(err,data){
 gebauede = JSON.parse(data);
for(var i=0; i<gebauede.staedte.length;i++){
    console.log(chalk.yellow("Stadt: "+gebauede.staedte[i].name));
    console.log(chalk.blue("Land: "+gebauede.staedte[i].country));
    console.log(chalk.grey("Groeße: "));
    if(gebauede.staedte[i].population>12000000){
      console.log(chalk.red(gebauede.staedte[i].population));    
    }else if(gebauede.staedte[i].population>10000000){
        console.log(chalk.yellow(gebauede.staedte[i].population));   
    }else{
        console.log(chalk.green(gebauede.staedte[i].population));   
    }
        
    console.log("-----------------------------");
    
}
 

});

