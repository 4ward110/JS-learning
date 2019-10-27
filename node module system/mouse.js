function Mouse(color){
    this.color = color;
    this.death =  false;
};

Mouse.prototype.die = function(){
    this.death = true;
};

module.exports = Mouse;