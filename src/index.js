const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Obtener el botón de inicio de cuenta regresiva
const startButton = document.querySelector('#start-btn');

// Agregar un event listener al botón de inicio
startButton.addEventListener('click', startCountdown);

// Función que iniciará el contador
function startCountdown() {
  console.log('Cuenta regresiva iniciada!');
  // Aquí más adelante colocaremos la lógica del contador
}







// ITERATION 2: Start Countdown
function startCountdown() {
  let remainingTime = 10;
  const timeElement = document.querySelector('#time');
  const startButton = document.querySelector('#start-btn');


  startButton.disabled = true;

  timeElement.innerHTML = remainingTime;

  const countdownInterval = setInterval(() => {
    remainingTime--; // Reducir el tiempo en 1 segundo
    timeElement.innerHTML = remainingTime; // Actualizar el tiempo mostrado




    // Si el tiempo llega a 0, detener el temporizador y mostrar la notificación
    if (remainingTime === 0) {
      clearInterval(countdownInterval); // Detener el temporizador
      startButton.disabled = false; // Habilitar el botón de nuevo
      showToast(); // Mostrar el mensaje de toast
    }
  }, 1000); 
}




// ITERATION 3: Show Toast
function showToast() {
  const toastElement = document.querySelector('#toast'); // Selecciona el elemento del toast
  toastElement.classList.add('show'); // Muestra el toast añadiendo la clase 'show'

  // Oculta el toast después de 3 segundos
  setTimeout(() => {
    toastElement.classList.remove('show'); // Elimina la clase 'show' para ocultar el toast
  }, 3000);





  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
