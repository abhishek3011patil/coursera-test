const questions = document.querySelectorAll(".question");

questions.forEach(function(question){
   const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", function(){
        console.log(question);
    
        questions.forEach(function(items){
            
            if(items !== question){
                console.log(items);
                items.classList.remove("show-text");
            }
        });
           question.classList.toggle("show-text");
    });
});