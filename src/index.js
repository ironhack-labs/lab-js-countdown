const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

const startButton = document.querySelector('#start-btn')
startButton.addEventListener("click", () => {
  startCountdown();
console.log("boton clicado");
});


// ITERATION 2: Start Countdown
function startCountdown() {
  startButton.disabled = true;
  let remainingTime = 10;
  const countDownInterval = setInterval (() => {
    remainingTime--;
    
    if (remainingTime <= 0) {
      clearInterval(countDownInterval);
      showToast();
    }

    document.getElementById('time').innerText = remainingTime;
  },1000)
  console.log("startCountdown called!");


}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
