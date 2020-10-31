const fs = require('fs');
// Add path to file
setInterval(() => {
    let message="Reading from server logs:"+Math.random()+"\n"  ;
    fs.appendFile('pathToFile/server.log',message , function (err) {
      if (err) {
        return console.log(err);
      }
      
    });
}, 1000)
  