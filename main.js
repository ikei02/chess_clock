console.log(window.location.href.split("?")[1].split("&")[0].split("=")[1])
var originParams = window.location.href.split("?")[1].split("&")
var params = {}
//for p in originParams:
originParams.forEach(p => {
  var tmp = p.split("=")
  params[tmp[0]] = tmp[1]
});
console.log(params)

const menuBtn =  document.getElementsByClassName("menu-btn")[0]
const menuModal = document.getElementsByClassName('menu-modal')[0]

menuBtn.onclick = function() {
  menuModal.setAttribute("class","menu-modal")
}

const closeBtn = document.getElementsByClassName("close-btn")[0]
const leftTimeText = document.getElementById("left-time-text")
const rightTimeText = document.getElementById("right-time-text")

closeBtn.onclick = function() {
  menuModal.setAttribute("class","menu-modal hide")
}

const revolutionBtn = document.getElementsByClassName("revolution-btn")[0]
const leftPlayerBtn = document.getElementById("left-player")
const rightPlayerBtn = document.getElementById("right-player")

let isRevolutioning = false;
revolutionBtn.onclick = function(){
  isRevolutioning = !isRevolutioning;
  leftTimeText.animate(
    [
      {transform: `rotate(${isRevolutioning ? 0 : 90}deg)`},
      {transform: `rotate(${isRevolutioning ? 90 :0}deg)`}
    ],
    {
      duration:100,
      easing:"linear",
      iterations:1
    }
  );
  rightTimeText.animate(
    [
      {transform: `rotate(${isRevolutioning ? 0 : -90}deg)`},
      {transform: `rotate(${isRevolutioning ? -90 :0}deg)`}
    ],
    {
      duration:100,
      easing:"linear",
      iterations:1
    }
  );
  leftTimeText.style.setProperty("transform",`rotate(${isRevolutioning ? 90 : 0}deg)`)
  rightTimeText.style.setProperty("transform",`rotate(${isRevolutioning ? -90 : 0}deg)`)
}

let leftPlayer = {
  time:10,
  additionalCheckOption:false,
  additionalCheckSeconds:5,
}

let rightPlayer = {
  time:10,
  additionalCheckOption:false,
  additionalCheckSeconds:5,
}
let status = "left"

function countDown(){
  if(status === "before" || status === "end" || status === "pause")return;
  if(status === "left"){
    leftPlayer.time--;
  }else{
    rightPlayer.time--
  }
  
  leftTimeText.innerText = `${leftPlayer.time}`;
  rightTimeText.innerText = `${rightPlayer.time}`;
  if(leftPlayer.time === 0 || rightPlayer.time === 0){
    status = "end"
    setTimeout(()=>{
      alert(`${leftPlayer.time === 0 ? "後攻" : "先行"}の勝ち`)
    },100);
  }
}

setInterval(countDown,1000)

rightPlayerBtn.onclick = function(){
  
  
  if(status === "right"){
    if(leftPlayer.additionalCheckOption){
      rightPlayer.time+=rightPlayer.additionalCheckSeconds
    }
    status = "left"
  }
}

leftPlayerBtn.onclick = function(){
  
  if(status === "left"){
    if(rightPlayer.additionalCheckOption){
      leftPlayer.time+=leftPlayer.additionalCheckSeconds
    }
    status = "right"
  }
}