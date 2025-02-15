const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown);


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  const timeDisplay = document.getElementById("time");

  // Desabilita o botão de início
  startButton.disabled = true;

  // Reinicia o tempo corretamente
  remainingTime = DURATION;
  timeDisplay.textContent = remainingTime;
  
  // Tem que ser antes do serInterval para aparecer 
  if (remainingTime === 10) {
    showToast("⏰ Final countdown! ⏰");
  }

  // Inicia a contagem
  timer = setInterval(() => {
    remainingTime--;
    timeDisplay.textContent = remainingTime;

    // Mostra as mensagens no tempo definido 
    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    } else if (remainingTime === 0) {
      showToast("Lift off! 🚀");
      clearInterval(timer);
      startButton.disabled = false;
    }
  }, 1000);
}



// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");

  // Define a mensagem no toast
  toastMessage.innerText = message;

  // Mostra o toast adicionando a classe 'show'
  toast.classList.add("show");

  // Fecha automaticamente após 3 segundos
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  const closeToastBtn = document.querySelector("#close-toast");

closeToastBtn.addEventListener("click", () => {
  clearTimeout(toastTimeout); // Cancela o fechamento automático
  document.getElementById("toast").classList.remove("show");
});

