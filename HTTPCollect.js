var http = require('http');

http.get(process.argv[2], function(response){
  response.setEncoding("utf8");
  var dataString = "";
  response.on("data", function (data){
    dataString += data;
  });

  response.on("error", function (error){
    if(err){
      console.log(err);
    }
  });

  response.on("end", function (end){
    console.log(dataString.length);
    console.log(dataString);
  });
});
