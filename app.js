var btn_Start = document.getElementById('start');
var btn_laf = document.getElementById('laf');
var btn_Pause = document.getElementsByClassName("pause");
var btn_Reset = document.getElementsByClassName('Reset');
var Laps = document.getElementsByTagName('Li');
var timer = document.getElementById("time") ;
var btn_clear= document.getElementById('clear');
var State = true;
var hh = 00 ;
var mm = 00 ;
var ss = 00 ;
var ms = 00 ;
var interval = 0 ;
const hourHand = document.querySelector("#hour-hand");
const minHand = document.querySelector("#min-hand");
const secHand = document.querySelector("#sec-hand");

function displaytime(hh,mm,ss,ms){
    timer.innerHTML=`${formatTime(hh)}:${formatTime(mm)}:${formatTime(ss)}:${formatTime(ms)}`
}

function formatTime(time) {
      return time.toString().padStart(2, "0");
}

function Start(){
    if (State){
        btn_Start.innerHTML="PAUSE";
        run_watch();
        State =! State;
    }else
    {  btn_Start.innerHTML="START" ;
       clearInterval(interval);
       State=!State;
    }
}

function run_watch(){
interval = setInterval(()=>{
    const secDegrees = (ms / 120) * 360;
    secHand.style.transform = `rotateZ(${secDegrees}deg)`;
    displaytime(hh,mm,ss,ms);
    analog(hh,mm,ss,ms);
    ms++;
    if(ms >= 100){
        ss++;
        ms = 0 ;
    }
    if (ss>= 60){
        mm++;
        ss=0;
    }
    if (mm >= 60){
        hh++;
        mm=0;
    }
},10)


}

function analog(hh,mm,ss,ms){
    const secDegrees = (ms / 120) * 360;
    secHand.style.transform = `rotateZ(${secDegrees}deg)`;
    const minDegrees = (ss / 60) * 360;
	minHand.style.transform = `rotateZ(${minDegrees}deg)`;



}



function Reset(){
    Start();
    clearInterval(interval);
    displaytime(hh=0,mm=0,ss=0,ms=0);
    analog(hh=0,mm=0,ss=0,ms=0);
    clearlaps();
}

// function addlap(){
 
//   btn_clear.style.display='none';
// }

function addlap(){
    if(!State){
    const tim = time.innerHTML ;
    var node = document.createElement("LI");
    var textnode = document.createTextNode(tim);
    node.appendChild(textnode);
    document.getElementById("laps").appendChild(node);
    }
}
function clearlaps(){
    if(State){
    var ul = document.getElementById("laps");
    ul.innerHTML = "";
    }
}