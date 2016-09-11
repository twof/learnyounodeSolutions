var fs = require('fs')
function printNewlines(){
    fs.readFile(process.argv[2], function doneReading(err, fileContents){
        if(err){
            console.log(err);
            return;
        }else{
            var newLineArray = fileContents.toString().split('\n');
            console.log(newLineArray.length-1);
        }
    });
}

printNewlines();
