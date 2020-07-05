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

var count_question = 0;
function display(abcjson){
    console.log(abcjson);
    question.innerHTML = abcjson.results[count_question].question;

    btns.forEach((btn, index)=>{

      btn.addEventListener("click" ,function(){
        
       

        if(abcjson.results[count_question].correct_answer === btn.dataset.id){
         
       btn.classList.add("butettrue");
      }
       
       else{
       btn.classList.add("butetfalse");
       }

      //  btns.forEach((btn2)=>{
         
      //   if(btn2!=btn)
      //   {
      //    
      //    btn2.classList.remove("butetfalse");

      //   }

      //  }); 
       
     
         
      btn.classList.remove("butetfalse");
      btn.classList.remove("butettrue");

      count_question++;
      question.innerHTML = abcjson.results[count_question].question;
      
       
      });
     
    });
    
    
}

function questionChanger(){


}



// quiz.open('GET', 'https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=boolean');

// quiz.onload = ()=>{
//     console.log(quiz.responseText);
// };
// quiz.send();