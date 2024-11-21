const DURATION = 10; // 10 seconds
let remainingTime = DURATION ; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button
const timeDivNode = document.getElementById("time")
const botonStartOnClick = document.getElementById("start-btn")
const spanText = document.getElementById("")

botonStartOnClick.addEventListener("click", () => {
  
  startCountdown();
  
});





// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  let intervalID = setInterval(() => {
    remainingTime--
    timeDivNode.innerText = remainingTime;
    console.log(remainingTime)
    if (remainingTime <= 0){
      clearInterval(intervalID)
      botonStartOnClick.disabled = true 
      showToast();
    }
  }, 1000)
  
}



// ITERATION 3: Show Toast
function showToast(message) {
  const toast = document.getElementById("toast");
  const closeToast = document.getElementById("close-toast"); 
  if (message) {
    toastText.innerText = message;
  }
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3400);
  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
