const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let buttonS = document.querySelector("#start-btn");
let numContador = document.querySelector("#time");
let toastElement = document.querySelector("#toast");
let closeBtn = document.querySelector("#close-toast");

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
buttonS.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  let intervalId = setInterval(() => {
    remainingTime--;
    numContador.innerText = remainingTime;

    showToast("⏰ Final countdown! ⏰");

    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }

    if (remainingTime <= 0) {
      clearInterval(intervalId);
      showToast("Lift off! 🚀");
    }
  }, 1000);

  buttonS.disabled = true;
}

// ITERATION 3: Show Toast
function showToast(message) {
  //console.log("showToast called!");
  const msj = document.querySelector("#toast-message");
  msj.innerHTML = message;

  toastElement.classList.add("show");
  let out = setTimeout(() => {
    toastElement.classList.remove("show");
  }, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  closeBtn.addEventListener("click", () => {
    toastElement.classList.remove("show");
    clearTimeout(out);
  });

  
}
