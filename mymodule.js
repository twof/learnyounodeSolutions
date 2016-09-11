var fs = require('fs');
var path = require('path');

module.exports = function(dirName, fileExt, callback){
    fs.readdir(dirName, function (err, list) {
        if(err){
            return callback(err);
        }
        
        var fileList = [];
        for(var i = 0; i < list.length; i++) {
            var extentionString = path.extname(list[i]);
            if(extentionString.substring(1, extentionString.length)  == fileExt){
                fileList.push(list[i]);
            }
        }
        callback(null, fileList);
    })
}
