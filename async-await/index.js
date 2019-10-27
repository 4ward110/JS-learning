// async-await

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

async function run() {
    var song1 = await readFilePromise('./song1.txt');
    var song2 = await readFilePromise('./song2.txt');

    // console.log(song1,song2);
    return [song1,song2];
}
run().then(function(values){
    console.log(values);
});