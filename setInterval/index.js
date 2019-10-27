// setInterval
// clearInterval
// goi ra ham sau moi khang thoi gian lien tuc
var i = 0;
var intervalId = setInterval(function(){
    ++i;
    console.log(i);
    if(i === 10){
        clearInterval(intervalId);
    }
},1000)