let hitrn= 0;
let scoreval=0;


function circleformation(){
    let clutter = '';
for (let circlecount = 0; circlecount <= 215 ; circlecount++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="circle">${rn}</div>`;
}
document.querySelector("#cont-bottom").innerHTML=clutter;
}

function runtimer(){
    let timer = 60;
    let interval = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#time").textContent = timer;
        }else{
            document.querySelector('#cont-bottom').innerHTML='Game Over'
            clearInterval(interval);
        }
    }, 1000);
}

function hit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector('#hit').textContent=hitrn;
}

function scoreincrement(){
    scoreval+=10;
   document.querySelector('#score').textContent = scoreval;
}

document.querySelector('#cont-bottom').
addEventListener("click",function(dets){
    let clickednum = Number(dets.target.textContent)
    if(clickednum === hitrn){
        scoreincrement();
        hit();
        circleformation();
    }
})


circleformation();
runtimer();
hit();

