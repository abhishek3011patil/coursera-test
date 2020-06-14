const btn = document.querySelectorAll(".btn");
let count=0;
const counter=document.querySelector("#counter");


btn.forEach(function(btns){
   btns.addEventListener("click", function(e){
    const styles = e.currentTarget.classList;
    console.log(e.currentTarget.classList);
    
    if(styles.contains("dec"));
    {
        count--;
        
    }
    if(styles.contains("inc")){
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

   });
});