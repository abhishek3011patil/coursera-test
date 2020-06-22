const btns = document.querySelectorAll(".tab-btn");
const abt = document.querySelector(".about");
const cont = document.querySelectorAll(".content");

abt.addEventListener("click", function(e){
  const id = e.target.dataset.id;
  console.log(id);
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