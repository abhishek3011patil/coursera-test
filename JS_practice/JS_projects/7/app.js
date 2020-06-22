const questions = document.querySelectorAll(".question");
const btn = document.querySelector(".question-btn");

questions.forEach(function(question){ 
    question.addEventListener("click", function(){
        console.log(question);
        questions.forEach(function(item){
            if(item!==question){
                item.classList.remove("show-text");
            }

        });
        question.classList.toggle("show-text");
    });
    
});