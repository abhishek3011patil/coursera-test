const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
// get parent element

// display all items when page loads

const sec_cen = document.querySelector(".section-center");
const btn_container = document.querySelector(".btn-container");





window.addEventListener("DOMContentLoaded", function(){
  addItems(menu);
  addbtns(menu);
  
});

function addbtns(additems){
  // we can say reduce takes given element from the array
  // and create a new array which requires us to intialize
  // the first element
  const categories= additems.reduce(function(value,item){
      //new elements are store in value and then returned
    if(!value.includes(item.category)){
      value.push(item.category);
    
    }
    return value;
    
  },["all"]); //"all" is the intial element of the array categories
 
  // see internet to understand map and filter.
  let btn_items = categories.map(function(item){

    return ` <button type="button" class="filter-btn" data-id="${item}">
    ${item}
  </button>`;
  
  // .join() is used to remove the ',' between merge array.
  }).join("");
    
  btn_container.innerHTML = btn_items;
  

  const filter_btn = document.querySelectorAll(".filter-btn");

  filter_btn.forEach(function(btn){
    btn.addEventListener("click", function(e){
      // dataset.id is used when there is a data-id attribute in the html
      //here data-"id" can have any value adn dataset."id" differs according to it
      const btn_Catagory = e.currentTarget.dataset.id;
      const btn_items = menu.filter(function(item){
        if(btn_Catagory==item.category){
          return item;
        }
      });
      if(btn_Catagory=="all"){
        addItems(menu);
      }
      else{
        addItems(btn_items);
      }
    });
  });
  
}

function addItems(additems){
     let items=additems.map(function(additem){
       
        return `<article class="menu-item">
     <img src="${additem.img}" alt="menu item" class="photo" />
     <div class="item-info">
       <header>
         <h4>${additem.title}</h4>
         <h4 class="price">${additem.price}</h4>
       </header>
       <p class="item-text">
         ${additem.desc}
       </p>
     </div>
   </article>`;
     });

     items = items.join("");
     sec_cen.innerHTML=items;
  
        
}


