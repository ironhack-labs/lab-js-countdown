const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startButton = document.querySelector("#start-btn");

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

startButton.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  let remainingTime = 10;
  const timeDiv = document.getElementById("time");
  timeDiv.textContent = remainingTime; // mostra 10 imediatamente

  const intervalId = setInterval(() => {
    remainingTime--; // 1) diminui
    timeDiv.textContent = remainingTime; // 2) atualiza DOM

    if (remainingTime <= 0) {
      // 3) se chegou no fim…
      clearInterval(intervalId); //    para o cronômetro
      showToast(); //    dispara o toast
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toast = document.getElementById("toast");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show"); // 3 segundos depois, esconde
  }, 3000);
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON

const closeButton = document.querySelectorAll(".close-toast");
closeButton.addEventListener("click", () => {
  closeButton.classList.remove("show");
});
