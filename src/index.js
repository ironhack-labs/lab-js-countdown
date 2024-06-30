const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

const botonComenzar = document.querySelector("#start-btn")
let displayCuentaAtras = document.querySelector("#time")
let tarjeta = document.querySelector("#toast")
// ITERATION 1: Add event listener to the start button

// Your code goes here ...

 

 botonComenzar.addEventListener("click",()=>{
  startCountdown()
 })




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

let intervalId = setInterval(()=>{
  if(remainingTime === 0){
 return false
  }
  remainingTime -- 
  displayCuentaAtras.innerText = remainingTime
  if(remainingTime === 0 ){
    clearInterval(intervalId)
    showToast();
    
  }
  botonComenzar.disabled = true
},1000)

  // Your code goes here ...
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
setTimeout(()=>{
  
  tarjeta.classList.remove("show")
},3000)
tarjeta.classList.add("show")


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
