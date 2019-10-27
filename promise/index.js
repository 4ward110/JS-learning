// Promise ( constructor function)
// var promise = new Promise();
// module promise-fs

// var fs = require('promise-fs');

// function onDone(data){
//     console.log(data);
// }

// function onError(err){
//     console.log(err);
// }
// function readFile(path){
//     return fs.readFile(path, {encoding:'utf-8'});
// };
// readFile('song1.txt')
//     .then(onDone)    
//     .then(function(){
//         return readFile('song2.txt');
//     })
//     .then(onDone)
//     .catch(onError);
// About promise:

var fs = require('fs');
function readFilePromise(path){
    return new Promise(function(resolve, reject){
        fs.readFile(path, {encoding:'utf-8'}, (err, data)=> {
            if(err){
                reject(err);
            }
            else{
                resolve(data);   
            }
        });   
    });
};

readFilePromise('song3.txt')
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    })