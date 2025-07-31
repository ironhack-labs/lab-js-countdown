const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = document.querySelector("div#time"); // Variable to store the interval



// ITERATION 1: Add event listener to the start button
const startBtnNode = document.querySelector("#start-btn");
startBtnNode.addEventListener("click", startCountdown);



// ITERATION 2: Start Countdown
function startCountdown() {
  remainingTime = DURATION;
  timer.innerText = remainingTime;
  startBtnNode.disabled = true;
  // console.log("startCountdown called!");
  showToast("⏰ Final countdown! ⏰");
  const intervalId = setInterval(() => {
    remainingTime--;
    timer.innerText = remainingTime;
    if (remainingTime === 5) {
      showToast("Start the engines! 💥")
    }
    if (remainingTime <= 0) {
      clearInterval(intervalId);
      showToast("Lift off! 🚀");
      startBtnNode.disabled = false;
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  const toastNode = document.querySelector("div#toast");
  const messageNode = toastNode.querySelector("#toast-message");
  messageNode.innerText = message;
  toastNode.classList.add("show");
  setTimeout(() => toastNode.classList.remove("show"), 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  const closeBtnNode = toastNode.querySelector("#close-toast");
  closeBtnNode.addEventListener("click", () => toastNode.classList.remove("show"));

}
