var http = require('http');

http.get(process.argv[2], function(response){
  response.setEncoding("utf8");
  response.on("data", function (data){
    console.log(data);
  });

  response.on("error", function (error){
    if(err){
      console.log(err);
    }
  });

  response.on("end", function (end){
    return;
  });
});
