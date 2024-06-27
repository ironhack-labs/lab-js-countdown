const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

document.querySelector("#start-btn").addEventListener("click", (event) =>{
  startCountdown()
  //console.log(event)
})



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  /* start() */
  showToast("⏰ Final countdown! ⏰")

  let cuentaAtras = setInterval(() =>{
    remainingTime--
  document.querySelector("#time").innerText = remainingTime
if(remainingTime === 5){
  showToast("Start the engines! 💥")
}
if(remainingTime === 0){
  
  clearInterval(cuentaAtras)
  showToast()
  remainingTime+=10
  document.querySelector("#time").innerText = 10
  document.querySelector("#start-btn").disabled = false
}






  },1000)
  document.querySelector("#start-btn").disabled = true;

}


// ITERATION 3: Show Toast
function showToast(message) {
  //console.log("showToast called!");
  let msj = document.querySelector("#toast-message")

  let toast = document.querySelector(".toast")
  msj.innerHTML = message
  toast.classList.add("show")
  let stop = setInterval(() =>{
    toast.classList.remove("show")
  }, 3000)

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  let cruz = document.querySelector("#close-toast")
  cruz.addEventListener("click", () =>{

    toast.classList.remove("show")
    clearInterval(stop)
  }) 
}