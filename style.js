// paypal card
let creditcard = document.querySelector(".credit")
let palCard = document.getElementById("pal-card")
let billsContainer = document.querySelector(".bills-container")
let formStructure = document.querySelector(".form-structure")

palCard.addEventListener("click", function(){
billsContainer.style.display="none"
formStructure.style.display="block"
})

creditcard.addEventListener("click", function(){
    billsContainer.style.display="flex"
formStructure.style.display="none"

let mq = window.matchMedia("(max-width: 1024px)")
if(mq.matches){
    billsContainer.style.display = "block"
 }else{
    billsContainer.style.display = "flex"
 }

})

document.getElementById('holder-num').addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
  });


  let  fullname = document.getElementById("full-name")
   let  billing = document.getElementById("Billing")
   let cityname = document.getElementById("city-name")
   let zipCode = document.getElementById("zip-code")
   let country = document.getElementById("smsno")
   let holderName = document.getElementById("holder-name")
   let holderNum = document.getElementById("holder-num")
   let expMonth = document.getElementById("exp-month")
   let  expYear = document.getElementById("exp-year")
   let holdercvc = document.getElementById("holder-cvc")
   let formStyle = document.querySelector(".form-style")
    let billscontainer = document.querySelector(".bills-container")

   formStyle.addEventListener("submit", e =>{
  
        billscontainer.style.display="none"
        concontainer.style.display="block"
        header.style.display="none"
    
    e.preventDefault()
   
   })




//    

let paypalForm = document.querySelector(".paypal-form")
let formstructure = document.querySelector(".form-structure")
let concontainer = document.querySelector(".con-container")
let holder = document.getElementById("holder")
let header = document.querySelector(".header")
let namehold = document.getElementById("name-hold")
let namespan = document.querySelector(".name-span")
document.getElementById('holder').addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
  });
paypalForm.addEventListener("submit", e=>{
    e.preventDefault()
formstructure.style.display="none"
concontainer.style.display="block"
header.style.display="none"

})
namehold.addEventListener("input", (e) => {
    namespan.textContent = namehold.value
  })

  holderName.addEventListener("input", (e) =>{
    namespan.textContent = holderName.value
  })



//   paypal expiration date autoFormat MM//YY

function formatString(event) {
    let inputString = String.fromCharCode(event.keyCode);
    let eventCode = event.keyCode;
    let numberOfKeys = [8];
    if ( numberOfKeys.indexOf(eventCode) !== -1) {
      return;
      
    }
  
    event.target.value = event.target.value.replace(
      /^([1-9]\/|[2-9])$/g, '0$1/' //  replaces 3 with 03/
    ).replace(
      /^(0[1-9]|1[0-2])$/g, '$1/' //  allows 11 > 11/
    ).replace(
      /^([0-1])([3-9])$/g, '0$1/$2' //  no 13 month on the calender replaces 13 or more with = 13 > 01/3
    ).replace(
      /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // no 141 month on the calender so it replaces 141 or more with 141 > 01/41
    ).replace(
      /^([0]+)\/|[0]+$/g, '0' // 0/ no 0 months won't be accepted > 0 and 00 > 0
    ).replace(
      /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
    ).replace(
      /\/\//g, '/' // Prevent entering more than 1 `/`
    );
  }



  