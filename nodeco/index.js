// Node Co
// gan tuong tu Promise.all
var fs = require('fs');
var co = require('co');

function readFilePromise(path){
    return new Promise(function(resolve, reject){
        fs.readFile(path, {encoding:'utf-8'}, function(err, data){
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        });
    });
}
// generator function
// ham 'co' tra ve mot promise
// co(function*(){
//     // var song2 = yield readFilePromise('./song2.txt');
//     // var song1 = yield readFilePromise('./song1.txt');
//     // var song3 = yield readFilePromise('./song3.txt');  
//     var values = yield [
//         readFilePromise('./song1.txt'),
//         readFilePromise('./song2.txt'),
//         readFilePromise('./song3.txt')
//     ]
//     return values;  
//     // console.log(song1,song2,song3);
//     // return [song1, song2, song3];

// }).then(function(values){
//     console.log(values);
// }).catch(function(error){
//     console.log(error);
// });
// co.wrap tra ve 1 ham va ham do se tra ve 1 promise
var readFiles = co.wrap(function*(files) {
    //[string] => [promise]
    var values = yield files.map(function(file){
        return readFilePromise(file);
    });
    return values;
});

readFiles(['song1.txt', 'song2.txt', 'song3.txt'])
    .then(function(values) {
        console.log(values);
    });
