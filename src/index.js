// src/index.js

// Elementos del DOM
const startBtn = document.getElementById('start-btn');
const timeDisplay = document.getElementById('time');
const toast = document.getElementById('toast');
const closeToastBtn = document.getElementById('close-toast');

let countdownInterval = null;   // Para almacenar el setInterval
let toastTimeout = null;        // Para almacenar el setTimeout del toast (bonus)

// Iteración 1: Detector de eventos del botón de inicio
startBtn.addEventListener('click', startCountdown);

// Iteración 4 (bonus): Botón de cierre del toast
closeToastBtn.addEventListener('click', () => {
  // Limpiar el timeout si existe
  if (toastTimeout) {
    clearTimeout(toastTimeout);
    toastTimeout = null;
  }
  toast.classList.remove('show');
});

// Iteración 2: Implementación de startCountdown()
function startCountdown() {
  // Deshabilitar el botón mientras corre la cuenta regresiva
  startBtn.disabled = true;

  // Obtener el tiempo inicial (asumiendo que está en el HTML como <div id="time">10</div>)
  let secondsLeft = parseInt(timeDisplay.textContent, 10);

  // Iniciar el intervalo (cada segundo)
  countdownInterval = setInterval(() => {
    secondsLeft -= 1;

    // Actualizar el display
    timeDisplay.textContent = secondsLeft;

    // Cuando llega a 0
    if (secondsLeft <= 0) {
      clearInterval(countdownInterval);
      countdownInterval = null;
      startBtn.disabled = false;  // Reactivar el botón (opcional, pero buena UX)
      showToast();                // Mostrar el toast
    }
  }, 1000);
}

// Iteración 3: Implementación de showToast()
function showToast() {
  // Mostrar el toast añadiendo la clase 'show'
  toast.classList.add('show');

  // Programar ocultarlo después de 3 segundos
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
    toastTimeout = null;
  }, 3000);
}