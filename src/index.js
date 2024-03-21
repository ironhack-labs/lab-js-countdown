const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let startCountdownButton = document.querySelector("#start-btn");
let timeText = document.querySelector("#time");
let toastButton = document.querySelector(`.toast`);
let toastMessagePopUp = document.querySelector(`.toast #toast-message`);
let timeWrapper = document.querySelector("#time-wrapper");

const toastMessages = {
  10: `⏰ Final countdown! ⏰`,
  5: `Start the engines! 💥`,
  0: `Lift off! 🚀`,
};
timeText.textContent = remainingTime;

// ITERATION 1: Add event listener to the start button
startCountdownButton.addEventListener(`click`, () => {
  console.log(`clicked`);
  startCountdown();
});
// Your code goes here ...

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  startCountdownButton.disabled = true;
  // Your code goes here ...

  timeText.textContent = remainingTime; // Initial display !

  timer = setInterval(() => {
    if (toastMessages.hasOwnProperty(remainingTime)) {
      showToast(toastMessages[remainingTime]);
    }
    remainingTime--;
    timeText.textContent = remainingTime;

    updateBorder(remainingTime);

    if (remainingTime === 0) {
      clearInterval(timer);
      showToast(toastMessages[remainingTime]);
      timeWrapper.classList.add("dissolve-move-up");
      setTimeout(() => {
        // Lazy reset .. need to put this into a function
        startCountdownButton.disabled = false;
        timeWrapper.classList.remove("dissolve-move-up");
        timeWrapper.style.background = "transparent";
        timeText.textContent = remainingTime;
      }, 4500);
      remainingTime = DURATION;
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastButton.classList.add("show");
  toastMessagePopUp.textContent = message;
  document
    .querySelector(`#close-toast`)
    .addEventListener("click", () => toastButton.classList.remove("show"));
  setTimeout(() => toastButton.classList.remove("show"), 3000);
}

// Super Bonus !
function updateBorder(remainingTime) {
  const totalDuration = DURATION;
  const elapsedTime = totalDuration - remainingTime;
  const percentage = (elapsedTime / totalDuration) * 100;

  // Assuming the border is 8px as per your CSS
  const borderWidth = 8;
  const circumference = 2 * Math.PI * (125 - borderWidth); // 125 is half the width and height of the #time element
  const offset = ((100 - percentage) / 100) * circumference;

  timeWrapper.style.background = `conic-gradient(#B2BCFF ${percentage}%, #f3f3f3 ${percentage}%)`;
}
