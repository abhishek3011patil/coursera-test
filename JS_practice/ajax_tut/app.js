const question = document.querySelector(".question");
const btns = document.querySelectorAll(".btn");
var quizAPI = "https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=boolean";
 
apiRequest(quizAPI);

function apiRequest(url){
    var quiz = new XMLHttpRequest();
    quiz.open('GET',url);

quiz.onload = ()=>{
  var abc = JSON.parse(quiz.responseText);
  display(abc);
   
};
quiz.send();

}


function display(abcjson){
    console.log(abcjson);
    question.innerHTML = abcjson.results[0].question;

    btns.forEach((btn)=>{
      btn.addEventListener("click" ,function(){
        console.log( abcjson.results[0].correct_answer);
        console.log( btn.dataset.id);
        console.log( abcjson.results[0].correct_answer === btn.dataset.id);
        btns.forEach((btn2)=>{
          if(abcjson.results[0].correct_answer === btn.dataset.id){
            btn2.classList.remove("butetfalse");
         btn.classList.add("butettrue");
        }
         
         else{
         btn2.classList.remove("butettrue")
         btn.classList.add("butetfalse");
         }});

        
      });});
    
}



// quiz.open('GET', 'https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=boolean');

// quiz.onload = ()=>{
//     console.log(quiz.responseText);
// };
// quiz.send();