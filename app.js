let games=[];
let user=[];
let colors=["green","red","yellow","purple"];
let largest=[];

let level=0;
let selected=false;
document.addEventListener("keypress",function(){
    if(selected==false){
        selected=true;

        levelUp();
    }
});



function levelUp(){
    level++;
    let secondHeading=document.querySelector("h2");
    secondHeading.innerText=`Level ${level}`;
    let randomindx=Math.floor(Math.random()*4);
    let randomclr=colors[randomindx];
    games.push(randomclr);
    console.log(games);
    let randombtn=document.querySelector(`.${randomclr}`);
    gameflash(randombtn);
    user=[];
}

function gameflash(randombtn){
    randombtn.classList.add("flash");
    setTimeout(() => {
        randombtn.classList.remove("flash");
    }, 250);
}

function userflash(randombtn){
    randombtn.classList.add("userflash");
    setTimeout(() => {
        randombtn.classList.remove("userflash");
    }, 250);
}

function checkAns(idx){
    if(games[idx]===user[idx]){
        if(games.length==user.length){
            setTimeout(levelUp,1000);
            
        }
    }else{
        let secondHeading=document.querySelector("h2");
        largest.push(level);
        secondHeading.innerHTML=`Game Over! <b>Your score was</b> ${level} Largest score is ${Math.max(...largest)}<br>Press any key to start the game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function buttonpress(){
    userflash(this);
    let userClr=this.getAttribute("id");
    user.push(userClr);

    checkAns(user.length-1);
}

let allbtns=document.querySelectorAll(".btns");

for(btn of allbtns){
    btn.addEventListener("click",buttonpress);
}

function reset(){
    selected=false;
    level=0;
    user=[];
    games=[];
}