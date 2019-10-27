// json object 
// stringify convert an object to json string/ parse: convert a json string to an object

var myProfile = {name: "Long", age:19, dead: false };
var myProfileString = JSON.stringify(myProfile);
console.log(typeof(myProfileString));
// console.log(myProfile);
