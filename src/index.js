const DURATION = 10; // 10 seconds
let remainingTime = DURATION;
let timer = null;
let toastTimeout = null; // Para poder cancelar el timeout del toast si se cierra manualmente

// ITERATION 1: Add event listener to the start button
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  startButton.disabled = true; // Desactiva botón

  const timeDisplay = document.getElementById("time");
  remainingTime = DURATION; // Reinicia el contador visual
  timeDisplay.innerText = remainingTime;

  timer = setInterval(() => {
    remainingTime--;
    timeDisplay.innerText = remainingTime;

    // BONUS: Mensajes dinámicos
    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    }
    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }

    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
      startButton.disabled = false; 
    }
  }, 1000);
}

// ITERATION 3 + BONUS: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");
  const closeButton = document.getElementById("close-toast");

  toastMessage.innerText = message;
  toast.classList.add("show");

  // Limpiar timeout anterior si existe
  if (toastTimeout) clearTimeout(toastTimeout);

  // Ocultar automáticamente después de 3 segundos
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

  // BONUS: Cerrar con botón "x"
  closeButton.onclick = () => {
    toast.classList.remove("show");
    if (toastTimeout) clearTimeout(toastTimeout);
  };
}
