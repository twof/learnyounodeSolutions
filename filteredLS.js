var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, list) {
    if(err){
        console.log(err);
        return;
    }

    for(var i = 0; i < list.length; i++) {
        var extentionString = path.extname(list[i]);
        if(extentionString.substring(1, extentionString.length)  == process.argv[3]){
            console.log(list[i]);
        }
    }
})
