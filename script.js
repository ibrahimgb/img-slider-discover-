const prev = document.getElementById("pre");
const next = document.getElementById("next");
const thumbnail = document.getElementsByClassName("thumbnail");
const hero = document.getElementById("hero");
let i = 0;
let backroungImg = new Array(
    "images/bg1.png",
    "images/bg2.png",
    "images/bg3.png",
    "images/bg4.png",
    "images/bg5.png"
);
console.log("this is it!!")
console.log(next);
next.onclick = function(){
   if(i>backroungImg.length){
    i=0;
   }
    hero.style.backgroundImage= 'url("' +backroungImg[i++]+'")';
    thumbnail[i+1].classList.add("active");
    thumbnail[i].classList.remove("active");
   

}
prev.onclick = function(){
    if(i<0){
     i=backroungImg.length;
    }
    
    hero.style.backgroundImage= 'url("' +backroungImg[i--]+'")';
    thumbnail[i-1].classList.add("active");
    thumbnail[i].classList.remove("active");
    
 
 }