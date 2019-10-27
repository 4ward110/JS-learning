var fs = require('fs');

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

// readFilePromise('./song1.txt')
//     .then(function(data1){
//         console.log(data1);
//         return readFilePromise('./song2.txt');
//     })
//     .then(function(data2){
//         console.log(data2);
//         return readFilePromise('./song3.txt');
//     })
//     .then(function(data3){
//         console.log(data3);
//     })

// promise all nhan vao cac mang promise

Promise.all([
    readFilePromise('./song1.txt'),
    readFilePromise('./song2.txt'),
    readFilePromise('./song3.txt')//then duoc goi khi ca 3 promise duoc resolved
]).then(function(values) {
    console.log(values);
}).catch(function(err){
    console.log(err);
});

