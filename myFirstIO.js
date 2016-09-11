var fs = require('fs')

var buffer = fs.readFileSync(process.argv[2])

var newLineArray = buffer.toString().split('\n')

console.log(newLineArray.length-1)
