const btns = document.querySelectorAll(".tab-btn");
const abt = document.querySelector(".about");
const cont = document.querySelectorAll(".content");

abt.addEventListener("click", function(e){
  // can be a good example of target vs currentTarget(does not work here)
  // so id consists the value of element clicked
  const id = e.target.dataset.id;
  console.log(id);
  //if statement to check wheter the data-id is present or not
  if(id){
    btns.forEach(function(btn){
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    cont.forEach(function(conts){
      conts.classList.remove("active");
    });

    const actived = document.getElementById(id);
    actived.classList.add("active");
  }
});