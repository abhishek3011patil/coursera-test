const btns = document.querySelectorAll(".btn");
var count=0;
const counter=document.querySelector("#value");


btns.forEach(function(btn){
   btn.addEventListener("click", function (e){
    const styles = e.currentTarget.classList;
    console.log(e.currentTarget.classList);
    
    if(styles.contains('decrease')){
        count--;
    }else if(styles.contains('increase')){
        count++;
    }
    else{
        count=0;
    }

    console.log(count);
      counter.textContent=count;

      if(count>0){
          counter.style.color="green";
      }
      else if(count<0){
          counter.style.color="red";
      }
      else
      {
          counter.style.color="blue";
      }

   });
});