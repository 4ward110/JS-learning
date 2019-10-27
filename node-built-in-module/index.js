// node built in module
// cac module duoc xay dung san khi cai node js ,
var fs = require('fs');

var text = fs.readFileSync('./song.txt', { encoding:'utf8' });
console.log(text);
fs.writeFileSync('./song2.txt','iam long ptit');