const colors = [1, 2, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn=document.getElementById("btn");
const color= document.querySelector(".color");

btn.addEventListener('click', function(){
    let HexColor="#";
    
    for(i=0;i<6;i++){
        HexColor+=colors[randomNumber()];
    }
    
    console.log(HexColor);
    document.body.style.backgroundColor= HexColor;
    color.textContent = HexColor;
});

function randomNumber(){
   return Math.floor(Math.random() * colors.length);
}