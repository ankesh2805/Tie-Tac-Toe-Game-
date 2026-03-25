let boxes=document.querySelectorAll('.btn')
let resetbtn=document.querySelector('#reset-btn')
let newGamebtn= document.querySelector("#new-btn")
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true ;
const win=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
]
boxes.forEach((box)=>{
  box.addEventListener('click',()=>{

    if (turn0===true){
      box.innerHTML="O"
      turn0=false;
    }
    else{
      box.innerHTML="X"
      turn0=true;
    }
    box.disabled= true;
    contwinner()
     
  })
})
const dis=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}
const showwinner=(winner)=>{
  msg.innerHTML=`Congratulations, Winner is Playes${winner}`
  msgContainer.classList.remove("hide");
  dis();

}

const contwinner=()=>{
  for(let pattern of win){
    
    let pos1val=boxes[pattern[0]].innerHTML
    let pos2val=boxes[pattern[1]].innerHTML
    let pos3val=boxes[pattern[2]].innerHTML
    if (pos3val!=="" && pos2val!=="" && pos1val!==""){
      if (pos1val==pos2val && pos2val==pos3val){
        console.log('winner')
        showwinner(pos1val);

      }

    }
  }
}
const enb=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerHTML=""
  }
}
const resetgame=()=>{
  turn0=true;
  enb();
  msgContainer.classList.add("hide")

}

resetbtn.addEventListener("click",()=>{
  resetgame()
})
newGamebtn.addEventListener("click",()=>{
  resetgame()
})

