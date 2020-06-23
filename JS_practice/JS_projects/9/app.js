const preloader = document.querySelector(".preloader");
const video = document.querySelector(".video-container");
const btn = document.querySelector(".switch-btn");

// you can see "load" event which means while content is loading
// while content is loading the preloaded will be displayed
window.addEventListener("load", function(){
    preloader.classList.add("hide-preloader");
  
});

btn.addEventListener("click", function(){
  if(!btn.classList.contains("slide")){
    //checkout .slide class in style.css if you want.
    btn.classList.add("slide");
    console.log(video);
     video.pause();
  }
  else{
    btn.classList.remove("slide");
    video.play();
  }
  
});