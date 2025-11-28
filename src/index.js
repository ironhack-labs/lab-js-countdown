const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let startBtn = document.getElementById("start-btn");
const closeBtn = document.getElementById("close-toast");
const toastMessage = document.getElementById("toast");

// ITERATION 1: Add event listener to the start button

startBtn.addEventListener("click", (event) => {
  startBtn.disabled = true;
  startCountdown();
});

// Your code goes here ...

// ITERATION 2: Start Countdown
function startCountdown() {
  let timeElement = document.getElementById("time");

  let timeCountdown = Number(timeElement.textContent);
  let countDownInterval = 0;

  countDownInterval = setInterval(() => {
    if (timeCountdown === 10) {
      showToast("⏰ Final countdown! ⏰");
    } else if (timeCountdown === 5) {
      showToast("Start the engines! 💥");
    }

    timeCountdown--;
    timeElement.textContent = timeCountdown;
    if (timeCountdown === 0) {
      showToast("Lift off! 🚀");
      clearInterval(countDownInterval);
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Mettre à jour le message
  toastMessage.innerText = message;

  // Afficher le toast
  toastMessage.classList.add("show");

  // Cacher après 3 secondes avec animation (la classe 'show' est enlevée)
  setTimeout(() => {
    toastMessage.classList.remove("show");
  }, 3000);
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON
// Mettre ça EN DEHORS de la fonction showToast, au même niveau que ton addEventListener du startBtn
closeBtn.addEventListener("click", (e) => {
  toastMessage.classList.remove("show");
});
