const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Paso 1: Seleccionar el botón de start usando su ID
const startButton = document.querySelector("#start-btn");

// Paso 2: Agregar un event listener que escucha cuando hacen click
startButton.addEventListener("click", function() {
  // Cuando hacen click, llamamos a la función startCountdown
  startCountdown();
});




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Paso 1: Deshabilitar el botón para que no puedan clickearlo otra vez
  startButton.disabled = true;
  
  // Paso 2: Mostrar el primer toast de "Final countdown"
  showToast("⏰ Final countdown! ⏰");
  
  // Paso 3: Iniciar el intervalo que se ejecuta cada 1 segundo (1000 milisegundos)
  timer = setInterval(function() {
    
    // Restar 1 segundo al tiempo restante
    remainingTime = remainingTime - 1;
    
    // Actualizar el número en la pantalla
    const timeDisplay = document.querySelector("#time");
    timeDisplay.textContent = remainingTime;
    
    // Verificar si llegamos a 5 segundos para mostrar otro mensaje
    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }
    
    // Verificar si el tiempo llegó a 0
    if (remainingTime === 0) {
      // Detener el intervalo
      clearInterval(timer);
      
      // Mostrar el toast de "Lift off"
      showToast("Lift off! 🚀");
      
      // Volver a habilitar el botón
      startButton.disabled = false;
      
      // Resetear el tiempo para poder empezar de nuevo
      remainingTime = DURATION;
      timeDisplay.textContent = remainingTime;
    }
    
  }, 1000); // 1000 milisegundos = 1 segundo
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Paso 1: Seleccionar el elemento del toast
  const toastElement = document.querySelector("#toast");
  
  // Paso 2: Seleccionar el span donde va el mensaje
  const toastMessage = document.querySelector("#toast-message");
  
  // Paso 3: Cambiar el texto del mensaje
  toastMessage.textContent = message;
  
  // Paso 4: Agregar la clase "show" para hacer visible el toast
  toastElement.classList.add("show");
  
  // Paso 5: Después de 3 segundos (3000 milisegundos), ocultar el toast
  setTimeout(function() {
    // Remover la clase "show" para ocultar el toast
    toastElement.classList.remove("show");
  }, 3000);



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
