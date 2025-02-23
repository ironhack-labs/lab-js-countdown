const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

document.getElementById("start-btn").addEventListener("click", function() {
  startCountdown();
});





// ITERATION 2: Start Countdown
function startCountdown() {
  document.getElementById("start-btn").disabled = true;

  intervalID = setInterval(() => {
    if (remainingTime > 0) {
      remainingTime--;
      document.getElementById("time").innerHTML = remainingTime;
    } else {
      clearInterval(intervalID);
      showToast(); 
      document.getElementById("start-btn").disabled = false;
    }
  }, 1000);
}



function showToast() {
  document.getElementById("toast").classList.add("show");
  setTimeout(() => {
    document.getElementById("toast").classList.remove("show");
  }, 3000);
}
