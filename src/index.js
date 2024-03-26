const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const timeElement = document.querySelector("#time")


// ITERATION 1: Add event listener to the start button

const startBtnElement = document.querySelector("#start-btn")
startBtnElement.addEventListener("click",()=>{
  startCountdown();
})



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  timer = setInterval(() => {
    remainingTime--;
    timeElement.innerText = remainingTime;
    if (remainingTime === 0) {
      clearInterval(timer);
      showToast(); // Call showToast() when remainingTime reaches 0
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast() {
 
  const toast = document.querySelector("#toast");
  toast.classList.add("show");
 
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

