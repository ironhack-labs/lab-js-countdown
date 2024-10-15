const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

const startButton = document.querySelector('#start-btn');
startButton.addEventListener("click", () => {
  document.querySelector('#time').innerText = DURATION; //con la linea 11 y 12, cuando el countdown llega a 0, si vuelvo a darle el boton, empieza otra vez desde 10
  remainingTime = DURATION;
  console.log("Start button clicked");
  startCountdown();
});




// ITERATION 2: Start Countdown
//document.querySelector('#time').innerText = remainingTime;
function startCountdown() {
  console.log("startCountdown called!");

const myInterval = setInterval(() => {
  startButton.disabled = true;
  document.querySelector('#time').innerText = remainingTime;
  remainingTime--;
  if (remainingTime<0) {
    clearInterval(myInterval);
    let message = document.querySelector('.toast');
    showToast(message);
    startButton.disabled = false; //con esta linea vuelve a estar clicable el boton start, para volver a empezar el countdown
  };

  //BONUS 5: MORE TOASTS
  if (remainingTime===4) {
    let message = document.querySelector('#toast5sec');
    showToast(message);
  };
  if (remainingTime===9) {
    let message = document.querySelector('#toast10sec');
    showToast(message);
  };
}, 1000);
}




// ITERATION 3: Show Toast
//let message = document.querySelector('.toast');
function showToast(message) {
  console.log("showToast called!");
message.classList.add('show'); //as in previous lab, no "." needed with the classList

const myTimeout = setTimeout(() => {    //comment 43-45 to see that toast message is displayed 2 times. why?
  message.classList.remove('show');
},3000);



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
const closeIcon = document.querySelector('#close-toast');
closeIcon.addEventListener("click", () => {
clearTimeout(myTimeout);
message.classList.remove('show');
});


}
