//sync and async
var fs = require('fs');

// console.log('start');
// var song1 = fs.readFileSync('song1.txt', { encoding: 'utf-8'});
// console.log(song1);
// var song2 = fs.readFileSync('song2.txt', { encoding: 'utf-8'});
// console.log(song2);
// console.log('end');

console.log('start');
fs.readFile('song1.txt',{encoding:'utf-8'},(err, data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("readfile success!!", data);
    }
});
console.log('end');

//read/write to fs
//network async
