const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown);



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  document.getElementById("start-btn").disabled = true;

  let remainingTime = 10;
  document.getElementById("time").innerText = remainingTime;

  // Iniciar la cuenta regresiva
  const cuentaAtras = setInterval(() => {
    remainingTime -= 1;
    document.getElementById("time").innerText = remainingTime;

    if (remainingTime <= 0) {
      clearInterval(cuentaAtras);
      showToast();
      document.getElementById("start-btn").disabled = false;
    }
  }, 1000);
}


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Show the toast element + add class "show" using classList method
  const toast = document.getElementById("toast");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
  

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
