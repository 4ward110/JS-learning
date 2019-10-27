// callback hell
var fs = require('fs');

fs.readFile('./song1.txt', {encoding: 'utf-8'},(err,data)=> {
    console.log(data);
    fs.readFile('./song2.txt', {encoding: 'utf-8'}, (err, data)=> {
        console.log(data);
        fs.readFile('./song3.txt', {encoding: 'utf-8'}, (err, data)=> {
            console.log(data);
        });  
    });
});