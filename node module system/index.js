// node module system
var Mouse = require('./mouse.js/index.js');
var Cat = require('./node module system/cat.js/index.js');

var mickey = new Mouse('black');
var jerry = new Mouse('orange');
console.log(mickey);
console.log(jerry);

var tom = new Cat();
tom.eat(mickey);
tom.eat(jerry);
console.log(tom);
