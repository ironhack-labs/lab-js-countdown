const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("startbutton");
startbutton.addEventListener("click", startCountdown);




const timeElement = document.getElementById("time")
// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
// Your code goes here ...
  startButton.disabled = true; 
  timer = setInterval(function () {
    remainingTime--;
    timeElement.innerText =  `${remainingTime}`
      if (remainingTime === 0) {
        clearInterval(timer);
        showToast()
      }
    }, 1000);
}


const toastElement = document.getElementById("toast");

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  // Your code goes here ...
  const list = toastElement.classList;
  list.add("show");

}
setTimeout(list.remove("show"), 3000)

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...


