//npm init to create a app using node package manager
//npm install + <module name> + --save : install a npm 

var readlineSync = require('readline-sync');

// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');

var languages = [];
var language = readlineSync.question('what is your mother language?');
languages.push(language);
console.log(languages);