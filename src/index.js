const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.querySelector("button")

startButton.onclick = () => {
  startCountdown()
}



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  timer = setInterval(() => {
    remainingTime--
    document.querySelector("div#time").innerHTML = remainingTime

    startButton.disabled = true;

  if(remainingTime <= 0){
    clearInterval(timer)
      showToast()
      startButton.disabled = false;
  }
  }, 1000)
} 





// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  let threeSeconds = 3
  let timerToast = setInterval(() => {
    threeSeconds--
  toast.classList.toggle("show") = timerToast

  if(threeSeconds <= 0){
    toast.classList.remove("show")
  }
  }, 1000)

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
