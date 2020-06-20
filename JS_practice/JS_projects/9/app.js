const preloader = document.querySelector(".preloader");
const video = document.querySelector(".video-container");
const btn = document.querySelector(".switch-btn");

window.addEventListener("load", function(){
    preloader.classList.add("hide-preloader");
  
});

btn.addEventListener("click", function(){
  if(!btn.classList.contains("slide")){
    btn.classList.add("slide");
    console.log(video);
     video.pause();
  }
  else{
    btn.classList.remove("slide");
    video.play();
  }
});