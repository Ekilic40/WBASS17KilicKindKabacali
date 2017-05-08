var http = require('http');
var server = http.createServer();
var fs = require('fs');
var chalk = require('chalk'); 




var gebauede;
fs.readFile(__dirname+"/staedte.json", function(err,data){
 gebauede = JSON.parse(data);
    
gebauede.staedte.sort(function(a,b){
    if(a.population == b.population){
        return 0;
    }else if(a.population < b.population){
        return 1;
    }else if(a.population > b.population){
        return -1;
    }
})    
data1 = JSON.stringify(gebauede);
fs.writeFile(__dirname+"/staedte_sortiert.json",data1,function(err){
    
})
    
for(var i=0; i<gebauede.staedte.length;i++){
    console.log(chalk.blue("Stadt: "+gebauede.staedte[i].name));
    console.log(chalk.grey("Land: "+gebauede.staedte[i].country));
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

