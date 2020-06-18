const btns = document.querySelectorAll(".question-btn");

btns.forEach(function(btn){
 btn.addEventListener("click", function(e){
     console.log(e.currentTarget.parentElement.parentElement);
     const que = e.currentTarget.parentElement.parentElement;
     const ques = document.querySelectorAll(".question");
     ques.forEach(function(items){
         if(items !== que){
             items.classList.remove("show-text")

        }
         console.log(items);
     });
     
     que.classList.toggle("show-text");
 });
});