const DURATION = 10; // 10 seconds
let remainingTime = Math.abs(DURATION); // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button
const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", () => startCountdown());

// ITERATION 2: Start Countdown
function startCountdown() {
  startButton.disabled = true;
  console.log("startCountdown called!");
  timer = setInterval(() => {
    remainingTime--;
    document.querySelector("div#time").innerText = remainingTime.toString();
    if (!remainingTime) {
      clearInterval(timer);
      showToast();
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  document.querySelector("div#toast").classList.add("show");
  setTimeout(
    () => document.querySelector("div#toast").classList.remove("show"),
    3000
  );
  // ITERATION 4: Toast Close Button
  document
    .querySelector("span#close-toast")
    .addEventListener("click", () =>
      document.querySelector("div#toast").classList.remove("show")
    );
}
