const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", () => {
  startCountdown()
})


// ITERATION 2: Start Countdown
function startCountdown() {
  timer = setInterval(function(){
    remainingTime--;
    document.querySelector("div#time").innerText = remainingTime
    startBtn.disabled = true;

    if (remainingTime === 9) {
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    } else if (remainingTime === 0) {
      clearInterval(timer)
      showToast("Lift off! 🚀")
    }
  }, 1000)
  console.log("startCountdown called!");

}


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toastClass = document.querySelector("div#toast").classList
  document.querySelector("#toast-message").innerText = message
  toastClass.add("show")

  setTimeout(function(){
    toastClass.remove("show")
  }, 3000)

}
