const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
let startButton = document.querySelector("#start-btn")
let numContador = document.querySelector ("#time")
let toastElement = document.querySelector ("#toast")
let closeButton = document.querySelector("#close-toast")

startButton.addEventListener("click", () => {
  startCountdown()
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  showToast("⏰ Final countdown! ⏰")

  timer = setInterval(() => {
    remainingTime --
    numContador.innerText = remainingTime

    if(remainingTime === 5) {
      showToast("Start the engines! 💥")
    }
    if (remainingTime === 0) {
    clearInterval(timer);
    showToast("Lift off! 🚀");
  }
}, 1000);
startButton.disabled = true
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toastMessage = document.querySelector("#toast-message");
  toastMessage.innerText = message;

  toastElement.classList.add("show");
  setTimeout(() => {
    toastElement.classList.remove("show");
  }, 3000);



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  let closeToastBtn = document.querySelector("#close-toast")

  closeToastBtn.addEventListener("click", (event) => {
    document.querySelector("#toast").classList.remove("show");
  })
  console.log(closeToastBtn)
}
