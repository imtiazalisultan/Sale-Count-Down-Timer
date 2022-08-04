
setInterval(()=>{
var timerEnd= new Date("10 Nov 2022 12:00:00").getTime();
// console.log(timerEnd);

var nowTime=new Date().getTime();
// console.log(nowTime);

var diffTime=timerEnd-nowTime;
// console.log(diffTime);

// to Convert The Days from Millisec to Hours
//1days=24hr
//1hr=60min;
//1min=60sec;
//1sec=1000ms;
//FOR DAYS
var days=Math.floor( diffTime / (1000*60*60*24));
console.log(days);

//For HOURS
var hour=Math.floor( ( diffTime % (1000*60*60*24)) / (1000*60*60) );
console.log(hour);

//For MINUTES
var min=Math.floor( (diffTime % (1000*60*60)) / (1000*60) );
console.log(min);

//For SECONDS
var sec=Math.floor( (diffTime % (1000*60)) / 1000);
console.log(sec);

//to show the Timer 
var showTimer=days+"Days, "+hour+"Hrs: "+min+"Min: "+sec+"Sec";

//Accessing the Id from the DOM
document.getElementById('demo').innerHTML=showTimer

},1000)

