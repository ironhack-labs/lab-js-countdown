const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn")
startButton.addEventListener("click", () => {
  startCountdown()
})



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  startButton.disabled = true;
  const time = document.getElementById("time")
  let count = 10;
  const intervalId = setInterval(() => {
    if(count >= 0) {
      time.innerHTML = count
    } else {
      clearInterval(intervalId)
      showToast();
    }
    count--;
  }, 1000)


  // Your code goes here ...
}





// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  const toast = document.getElementById("toast")
  toast.classList.add("show")
  setTimeout(() => {
    toast.classList.remove("show")
  }, 3000)
  
  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
