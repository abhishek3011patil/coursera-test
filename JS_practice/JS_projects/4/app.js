// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const toggle = document.querySelector(".nav-toggle");


toggle.addEventListener("click", function(){
    console.log(links.classList);
    if(links.classList.contains("show-links")){
        links.classList.remove("show-links");
 
    }
    else{
        links.classList.add("show-links");

    }
});
