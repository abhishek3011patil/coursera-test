// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const btnss = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closes = document.querySelector(".close-btn")

  btnss.addEventListener("click" ,function(){
    
      modal.classList.toggle("open-modal");
    });

    
    closes.addEventListener("click",function(){
      
        modal.classList.toggle("open-modal");
      });