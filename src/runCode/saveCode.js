const fs = require("fs");
const crypto = require('crypto');

var makeFileName = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

module.exports = (code) => {
    let fileName = makeFileName(12);
    fs.writeFileSync(`./src/runCode/code/${fileName}.js`, code);
    return `./src/runCode/code/${fileName}.js`;
}