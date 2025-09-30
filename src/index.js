const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startButton = document.querySelector("#start-btn");
const time = document.querySelector("#time");



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startButton.addEventListener('click', startCountdown)



// ITERATION 2: Start Countdown
timer = 10;
function startCountdown() {
  console.log("startCountdown called!");
 


  // Your code goes here ...
   const intervalId = setInterval(function () {
    timer --;
    time.innerHTML = `${timer}`;
    startButton.disabled = true;


    if (timer === 0) {
      clearInterval(intervalId);
      showToast();
      startButton.disabled = false;
      timer = 10;
      time.innerHTML = `${timer}`;
      }
      
    }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toast = document.querySelector("#toast");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList. remove("show");
   }, 3000);


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
   const closeButton = document.querySelector("#close-toast");
   closeButton.addEventListener("click", () => toast.classList. remove("show"));

  // ITERATION 5:

}
