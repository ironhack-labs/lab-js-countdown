const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

const btn = document.getElementById("start-btn")
btn.addEventListener("click", startCountdown)

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  document.getElementById("start-btn").disabled = true

let counter = 11; 

const id = setInterval(function () {
  counter--
document.getElementById("time").innerText = counter;

if (counter === 10) {
  showToast("⏰ Final countdown! ⏰")
}
else if (counter === 5) {
  showToast("Start the engines! 💥")
}
else if (counter <= 0) {
  clearInterval(id)
  showToast("Lift off! 🚀")
}
}, 1000)
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  let toastMessage = document.getElementById("toast-message")
  toastMessage.innerText = message

  const toastElement = document.getElementById("toast")
  toastElement.classList.add("show")
  setTimeout(function() {
    toastElement.classList.remove("show")
  }, 3000)

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  const closeBtn = document.getElementById("close-toast")
  closeBtn.addEventListener("click", function () {
    toastElement.classList.remove("show")
  } )

}
