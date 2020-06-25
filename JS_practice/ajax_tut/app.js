const question = document.querySelector(".question")
 
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
    
}


// quiz.open('GET', 'https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=boolean');

// quiz.onload = ()=>{
//     console.log(quiz.responseText);
// };
// quiz.send();