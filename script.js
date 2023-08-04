var display = document.getElementById('display');

let timerId = null;


let[hour , minute , second]=[0,0,0];

function stopwatch(){

     second++;

    if(second === 60){
      second = 0; 
      minute++;
        if(minute === 60){
         minute=0;
         hour++;
        }
       }
        let h = hour <10 ?"0"+hour:hour;
        let m = minute <10 ?"0"+minute:minute;
        let s = second <10 ?"0"+second:second;
        display.innerHTML = h +" : "+ m + " : " + s;
       



}
function start(){
 if(timerId!=null){
    clearInterval(timerId);
 }
   timerId = setInterval(stopwatch,100);
}
function stops(){
 clearInterval(timerId);
}
function resets(){
 clearInterval(timerId);
   hour=0;
   minute=0;
   second=0;
  display.innerHTML = "00 : 00 : 00" ;
}
