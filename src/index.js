const DURATION = 10; // 10 seconds
const getTimeDiv = document.querySelector("#time");
const startBtn = document.querySelector("#start-btn");
const toastCard = document.querySelector("#toast")
const closeToast = document.querySelector("#close-toast")
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval




// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startBtn.addEventListener("click", () => {
  startBtn.disabled = true
 startCountdown(remainingTime)
})


// ITERATION 2: Start Countdown
function startCountdown(duration) {
  console.log("startCountdown called!");

  const intervalId = setInterval(() => {
    getTimeDiv.innerText = `${duration}`;
    duration + 1
    duration--;
    console.log(duration);

    if (duration === -1) {
      clearInterval(intervalId)
      showToast();
      startBtn.disabled = false
    }
  
   }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastCard.classList.toggle("show");
  // Your code goes here ...
  setTimeout(() => {
    toastCard.classList.remove("show");
  }, 3000)



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
closeToast.addEventListener("click", (event) => {
  toastCard.classList.toggle("show")
})
}
