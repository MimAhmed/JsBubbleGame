let timer = 100; // use for  game timer
let score = 0;
let hitrn = 0;

function randomNumGenerator(){
     hitrn = Math.floor(Math.random()*10); // This will generate random number between 0 to 9
     return hitrn;
}

function increseScore(){
    score += 10;
    document.querySelector("#increseval").textContent = score;
    
}

function makeBubble(){
let bubble = "";

for(let i = 1; i<150;i++){
    // let randomNumGenerator = Math.floor(Math.random()*10);
    randomNumGenerator();
    bubble += `<div class="bubble">${hitrn}</div>`;
}

document.querySelector("#pbtm").innerHTML = bubble;
}

function runTimer(){
  let timeTracker = setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#timeVal").textContent = timer;
        }
        else{
           clearInterval(timeTracker);
           document.querySelector("#timeVal").textContent = "--";
           document.querySelector("#pbtm").innerHTML = `<h1 id="cen"> Time Over </h1>`;
        }
    },1000)
}

function getNewHit(){
    // hitrn = Math.floor(Math.random()*20);
    randomNumGenerator();
    document.querySelector("#newHit").textContent = hitrn;
}

document.querySelector('#pbtm').addEventListener("click",function(d){
    // alert("run");
    let clickEventNumber = Number(d.target.textContent);
    if(clickEventNumber === hitrn){
        increseScore();
        makeBubble();
        getNewHit();
    }
});

// Function Calls
makeBubble();
runTimer();
getNewHit();
