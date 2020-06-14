const color = ["red", "green", "blue", "yellow"];
const butt = document.getElementById("btn");
const colort = document.querySelector(".color");

butt.addEventListener("click", function(){
    const RandomNumber=getRandomNo();
    console.log(RandomNumber);
    document.body.style.backgroundColor= color[RandomNumber];
    colort.textContent =color[RandomNumber];
});

function getRandomNo(){
   return Math.floor(Math.random()*color.length);
}