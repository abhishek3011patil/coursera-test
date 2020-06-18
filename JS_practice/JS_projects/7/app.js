const btn = document.querySelectorAll(".question-btn");

btn.forEach(function(btns){
    btns.addEventListener("click", function(){
        console.log(btns.parentElement);
    })});