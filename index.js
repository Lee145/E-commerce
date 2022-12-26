let Imageminus = document.querySelector(".minus")
let Imageplus = document.querySelector(".plus")
let add = document.querySelector(".add")
let btnCart = document.querySelector(".btn-cart")
let number = document.querySelector(".number")
let cartbackground = document.querySelector(".cart-background")
let iconImg = document.querySelector(".icon-img") 
let itemdetails = document.querySelector(".item-details")
let options = document.querySelector(".options")
let quantity1 = document.querySelector(".quantity1")
let total = document.querySelector(".total")
let delImg = document.querySelector(".del-img")
let itemDetails = document.querySelector(".item-details")
let mobilenavlist = document.querySelector(".mobile-nav-list")
let menu = document.querySelector(".menu")

let closebtn = document.getElementById("close")
let closecart = document.getElementById("close-cart")


let count = 0
Imageplus.addEventListener("click", function() {
  
    count+=1
    add.textContent = count
})

Imageminus.addEventListener("click", function(){
   if(count > 0){
    count -=1
    add.textContent = count
   }
   
})

btnCart.addEventListener("click",function(){
   number.textContent = count
   number.style.display = "block"

   if(count === 0) {
    number.style.display = "none"
   }
})


number.addEventListener("click", function() {
    cartbackground.style.display = "block"
    itemDetails.style.display = "block"
     options.style.display = "none"
  quantity1.textContent = count

let countTip =  125.00 * count
total.textContent = `$${countTip}.00`
})
iconImg.addEventListener("click", function() {
    cartbackground.style.display = "block"
    options.style.display = "block"
})
delImg.addEventListener("click", function(){
    itemDetails.style.display = "none"
    options.style.display = "block"
    number.style.display = "none"
   
})




const mainMenu = document.querySelector('.mobile-nav-list');
const closeMenu = document.querySelector('.menu-close');
const openMenu = document.querySelector('.menu');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


function show(){
    mainMenu.style.display = 'block';
    mainMenu.style.left = '0';
}

function close(){
    mainMenu.style.left = '-100%';
}



 


// Active slides
let slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
    showSlides(slideIndex += n)
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n)
  }
  
  function showSlides(n) {
    let i
    let slides = document.querySelectorAll(".slides")
    let popup = document.querySelectorAll(".popup")
    let thumbnail = document.querySelectorAll(".thumbnail")
    let thumbnailpopup = document.querySelectorAll(".thumbnail-popup")
 
    if (n > slides.length) {slideIndex = 1}
    if (n > popup.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    if (n < 1) {slideIndex = popup.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"
    }

    for (i = 0; i < popup.length; i++) {
        popup[i].style.display = "none"
      }

    for (i = 0; i < thumbnail.length; i++) {
      thumbnail[i].className = thumbnail[i].className.replace(" active", "")
    }

    for (i = 0; i < thumbnailpopup.length; i++) {
        thumbnailpopup[i].className = thumbnailpopup[i].className.replace(" active", "")
      }
    slides[slideIndex-1].style.display = "block"
    popup[slideIndex-1].style.display = "block"
    thumbnail[slideIndex-1].className += " active"
    thumbnailpopup[slideIndex-1].className += " active"
  }

  function innit() {
    for(let i=0; i <=3; i++){
        document.querySelectorAll(".slides")[i].addEventListener("click", function(){
          let mq = window.matchMedia("(max-width: 768px)")
            if(mq.matches){
               document.querySelector(".img-popup").style.display = "none"
             }else{
              document.querySelector(".img-popup").style.display = "block"
             }

    }
)}

  }
 innit()






closebtn.addEventListener("click", function(){
    document.querySelector(".img-popup").style.display = "none";
})
closecart.addEventListener("click", function(){
    cartbackground.style.display = "none"
})


