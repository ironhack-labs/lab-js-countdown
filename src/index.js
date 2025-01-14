const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  const timeElement = document.querySelector("#time");
  const startButton = document.querySelector("#start-btn");

  startButton.disabled = true; // Deshabilitar el botón de inicio

  timer = setInterval(() => {
    remainingTime--;
    timeElement.textContent = remainingTime;

    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }

    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  function showToast(message) {
    console.log("showToast called!");
    const toastElement = document.querySelector("#toast");
    const toastMessage = document.querySelector("#toast-message");

    toastMessage.textContent = message; // Actualizar el mensaje
    toastElement.classList.add("show"); // Mostrar el toast

    setTimeout(() => {
      toastElement.classList.remove("show"); // Ocultar el toast después de 3 segundos
    }, 3000);
  }

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  const closeToastButton = document.querySelector("#close-toast");
  closeToastButton.addEventListener("click", () => {
    const toastElement = document.querySelector("#toast");
    toastElement.classList.remove("show"); // Ocultar el toast manualmente
  });
}
