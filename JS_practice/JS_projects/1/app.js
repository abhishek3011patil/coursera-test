const colors = ["red", "green", "pink", " blue", "yellow"];
const color = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    let random_no=changeColor();
    document.body.style.backgroundColor = colors[random_no];
         color.textContent = colors[random_no];
});


function changeColor(){
    return Math.floor(Math.random()*colors.length);
}