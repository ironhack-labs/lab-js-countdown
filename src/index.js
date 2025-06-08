const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.querySelector("#start-btn")
startBtn.addEventListener("click", () =>{
  startCountdown()
})


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  const timeDisplay = document.querySelector("#time")
  timeDisplay.textContent = remainingTime

  const intervalId = setInterval(() => {
    remainingTime --

    timeDisplay.textContent = remainingTime

    if(remainingTime === 0) {
      clearInterval(intervalId)
      showToast()
    }

  }, 1000)
  // Your code goes here ...
  
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const toast = document.querySelector("#toast")
  toast.classList.add("show")

  setTimeout(() =>{
    toast.classList.remove("show")
  }, 3000)
  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}