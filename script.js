const prev = document.getElementById("pre");
const next = document.getElementById("next");
const thumbnail = document.getElementsByClassName("thumbnail");
const hero = document.getElementById("hero");
let i = 0;
let backroungImg = new Array(
    "Radiance_img/bg1.png",
    "Radiance_img/bg2.png",
    "Radiance_img/bg3.png",
    "Radiance_img/bg4.png",
    "Radiance_img/bg5.png"
);

next.onclick = function(){
    console.log(i);
   if(i>=backroungImg.length || i<0){
    i=0;
   }
    hero.style.backgroundImage= 'url("'+backroungImg[i]+'")';
    thumbnail[i].classList.add("active");
    try{thumbnail[i-1].classList.remove("active");
    }catch{
        thumbnail[thumbnail.length-1].classList.remove("active");
    }
    
    i++
   

}
prev.onclick = function(){
    console.log(i);
    if(i<0){
     i=backroungImg.length-1;
    }
    
    try{
        hero.style.backgroundImage= 'url("' +backroungImg[i]+'")';
        thumbnail[i].classList.add("active");
    }catch{
        hero.style.backgroundImage= 'url("' +backroungImg.length-1+'")'; 
        thumbnail[0].classList.add("active");
    }
    
    try{thumbnail[i+1].classList.remove("active");
    }catch{
    thumbnail[0].classList.remove("active");
    }
    i--;
 }