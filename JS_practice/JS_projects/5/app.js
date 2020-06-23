const sidebar = document.querySelector(".sidebar");
const toggle_btn = document.querySelector(".sidebar-toggle");
const close_btn = document.querySelector(".close-btn");

toggle_btn.addEventListener("click", function(){
    
   sidebar.classList.add("show-sidebar");
});

close_btn.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar");

});


