var http = require('http');

var returnCount = 0;
var dataArray = [];

http.get(process.argv[2], function(response){
  var fullData = "";
  response.setEncoding("utf8");
  response.on("data", function (data){
    fullData += data;
  });

  response.on("error", function (error){
    if(err){
      console.log(err);
    }
  });

  response.on("end", function (end){
    dataArray[0] = fullData;
    returnCount++;
    if (returnCount == 3) {
      printAllAtEnd();
    }
  });
});

http.get(process.argv[3], function(response){
  var fullData = "";
  response.setEncoding("utf8");
  response.on("data", function (data){
    fullData += data;
  });

  response.on("error", function (error){
    if(err){
      console.log(err);
    }
  });

  response.on("end", function (end){
    dataArray[1] = fullData;
    returnCount++;
    if (returnCount == 3) {
      printAllAtEnd();
    }
  });
});

http.get(process.argv[4], function(response){
  var fullData = "";
  response.setEncoding("utf8");
  response.on("data", function (data){
    fullData += data;
  });

  response.on("error", function (error){
    if(err){
      console.log(err);
    }
  });

  response.on("end", function (end){
    dataArray[2] = fullData;
    returnCount++;
    if (returnCount == 3) {
      printAllAtEnd();
    }
  });
});

function printAllAtEnd(){
  for (var i = 0; i < dataArray.length; i++) {
    console.log(dataArray[i]);
  }
}
