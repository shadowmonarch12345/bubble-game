function makeBubble(){
    var clutter=""
for(var i=1;i<=90;i++){
    var rn=Math.floor(Math.random()*10)
   clutter+=`<div class="bubble">${rn}</div>`
}

document.querySelector("#pbtom").innerHTML=clutter
}
var timer=60;

function runtimer(){
    
var timerint=setInterval(function () {
    
    
    if(timer>0){
        timer--;
    document.querySelector("#timervalue").textContent=timer;
    }
    else{
        clearInterval(timerint);
    }
},1000);
}

function getNewHit(){
    var rn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=rn;
}

runtimer();
makeBubble();
getNewHit()