// date
// moment.js

// var now = new Date();
// var myBirthday = new Date(2000,9,1);

// save number of milisecon from 1-1-1970

// console.log(now.getTime());
// console.log(myBirthday.getTime());
var moment = require('moment');
var now = moment('2020-01-12 7:00');
console.log(now.fromNow())
