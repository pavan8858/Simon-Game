//  let ul = document.querySelector("ul");
//  let inp = document.querySelector("input");
//  let btn = document.querySelector("button");
//  btn.addEventListener("click", function(){
//     let item = document.createElement("li");
//     item.innerText = inp.value;

//     let delBtn = document.createElement("button");
//     delBtn.innerText="delete";
//     delBtn.classList.add("delete");
    
//     item.appendChild(delBtn);
//     ul.appendChild(item);
//     inp.value="";
//  });
 
//  ul.addEventListener("click",function(event){
//   if(event.target.nodeName == "BUTTON"){
//     let listItem = event.target.parentElement;
//     listItem.remove();
//     console.log("deleted");
//     }else{
//     console.log("not deleted");
//   }
//  });
  
//                              Todo app code end

let gameSeq = [];
let userSeq = [];
let btns = ["yellow","red","purpel","green"];
let started = false;
let level =0;
let score = document.querySelector("p");
let highScore = 0;
let h2 = document.querySelector("h2");
let startbtn = document.querySelector("button");
startbtn.addEventListener("click",function(){
  if(started == false){
    console.log("game is started ");
    started = true;
    levelup();
  }
});
function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },250);

}
function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  },250);

}
function levelup(){
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let randIdx = Math.floor(Math.random()*3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  // console.log(randIdx);
  // console.log(randColor);
  // console.log(randBtn);
  gameFlash(randBtn);

}
function checkAns(idx){
  
  if(userSeq[idx] == gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
      setTimeout(levelup(),1000);
    }
  }else{
    
    h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any other key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    if(highScore<level){
      highScore = level;
      score.innerText = "High Score: "+highScore; 
    }
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor = "white";
      
    },200);
    reset();
  }
}

function btnPress(){
  console.log(this);
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length -1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
  btn.addEventListener("click",btnPress);
}
function reset(){
  started = false;
  gameSeq = [];
  userSeq = [];
  level =0;

}
