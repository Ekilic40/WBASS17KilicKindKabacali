var fs = require('fs');
var chalk = require('chalk');

var file = __dirname + "/wolkenkratzer.json";


fs.readFile(file, function(err, data){
  if(err) throw err;
   else { var datei = JSON.parse(data);
         datei.wolkenkratzer.sort(function(a, b){
                                  return b.hoehe - a.hoehe
                                  });
         
         datei.wolkenkratzer.forEach(function(obj){
         wolkenkratzerAusgabe(obj.name, obj.stadt, obj.hoehe);
         console.log("---------------------------------------");
    });
       
         var speicher = JSON.stringify(datei.wolkenkratzer);
         fs.writeFile('wolkenkratzer_sortiert.json', datei.wolkenkratzer, function(err){ if (err) throw err});
        }
});
    
   function wolkenkratzerAusgabe(name, stadt, hoehe) {
       console.log("Name: " + chalk.grey(name));
       console.log("Stadt: " + chalk.red(stadt));
       console.log("Hoehe: " + chalk.yellow(hoehe)); 
   }


 