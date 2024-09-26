const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

let startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startCountdown);




// ITERATION 2: Start Countdown
function startCountdown() {
  let messages = ["⏰ Final countdown! ⏰", "Start the engines! 💥","Lift off! 🚀"]
  toBeDisplayedMessage = messages[Math.floor(Math.random()*messages.length)]
  timeContainer = document.querySelector("#time");
  startButton.disabled = true;
  timeContainer.innerText = remainingTime;
  console.log("startCountdown called!");
  const countdownInterval = setInterval(() => {
    console.log(remainingTime)
    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    }
    remainingTime--;
    timeContainer.innerText = remainingTime;
    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }
    if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      showToast("Lift off! 🚀");
    }
  },1000)
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastElement = document.querySelector("#toast");
  toastElement.querySelector("span").innerText = message;
  toastElement.classList.add("show");
  closeButtonToast = document.querySelector("#close-toast")
  closeButtonToast.addEventListener("click", closeToast)
  setTimeout(closeToast,3000)
}

function closeToast() {
  toastElement.classList.remove("show")
}
