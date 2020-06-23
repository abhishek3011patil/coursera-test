const questions = document.querySelectorAll(".question");
const btn = document.querySelector(".question-btn");

// here we learned that instead of just choosing th button
// we can actually choose the parent class to be more specific
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