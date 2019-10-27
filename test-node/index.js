/**
 * Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
 */
// var urls = [
//     'https://jsonplaceholder.typicode.com/todos/1',
//     'https://jsonplaceholder.typicode.com/todos/2',
//     'https://jsonplaceholder.typicode.com/todos/3',
//     'https://jsonplaceholder.typicode.com/todos/4',
//     'https://jsonplaceholder.typicode.com/todos/5'
//   ];
  
  // Cách 1: Sử dụng vòng lặp for
  
  // Cách 2: Sử dụng array.map
  // Gợi ý: Có thể yield 1 array các Promise
  
  // const axios = require('axios');
  // const co = require('co');
  
  // function crawData(url){
  //   return new Promise(function(resolve, reject){
  //     axios.get(url)
  //       .then(function(data){
  //         resolve(data);
  //       })
  //       .catch(function(error){
  //         reject(error);
  //       })
  //   })
  // }
  // for ( var url of urls ) {
  //   co(function*(){
  //   var data = yield crawData(url);
  //   console.log(data);
  //   });
  // };
  
  for( var i = 0; i<10; i++){
    console.log(i);
    if(i>3){
      break;
    }
  }