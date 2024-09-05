const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

let firstButton= document.querySelector("#start-btn")
firstButton.addEventListener("click", ()=>{
  startCountdown()
  
})

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  const cuentaRegresiva= document.querySelector("#time")
  let timeLeft=10;

  cuentaRegresiva.innerHTML=timeLeft;

  let temporizador= setInterval(()=>{
    timeLeft--;
    cuentaRegresiva.innerHTML=timeLeft;
    if(timeLeft<= 0){
      clearInterval(temporizador);
      
    }
  }, 1000)
  
  
}






// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
const tarjeta= document.querySelector("#toast");
tarjeta.classList.add("show");

let tiempoQueQueda=3;


let intevalId= setInterval(()=>{
  tiempoQueQueda--;

  if(tiempoQueQueda <= 0){
    
  clearInterval(intevalId)
  tarjeta.classList.remove("show")
  }
  
}, 3000)
}


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...


   