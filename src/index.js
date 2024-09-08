const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button
const startBtn = document.querySelector("#start-btn");
startBtn.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  startBtn.disabled = true;

  let time = document.querySelector("#time");

  timer = setInterval(() => {
    time.innerText --;

    if(time.innerText === "9") {
      showToast("⏰ Final countdown! ⏰");
    }
    else if(time.innerText === "5") {
      showToast("Start the engines! 💥");
    } else if(time.innerText === "0") {
      clearInterval(timer);
      showToast("Lift off! 🚀");
    }

  }, 1000);
}


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const toastNode = document.querySelector("#toast");
  toastNode.classList.add("show");

  const toastMessageNode = document.querySelector("#toast-message");
  toastMessageNode.innerText = message;

  setTimeout(() => { 
    toastNode.classList.remove("show");
  }, 3000);


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  const closeToastNode = document.querySelector("#close-toast");
  closeToastNode.addEventListener("click", () => {
    toastNode.classList.remove("show");
  });

}