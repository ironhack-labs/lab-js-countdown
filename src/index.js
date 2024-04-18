const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button


let button = document.getElementById("start-btn").addEventListener("click", startCountdown);



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  
  document.getElementById("start-btn").disabled = true;

  let counter = 0;

  document.getElementById("time").innerText = remainingTime;

  const countdown = setInterval(function() {
    counter++;
    remainingTime--;
    document.getElementById("time").innerText = remainingTime;

    if (remainingTime <= 0){
      clearInterval(countdown);
      showToast();
      document.getElementById("start-btn").disabled = false;
    }
  }, 1000);

}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const toast = document.getElementById("toast");

  toast.classList.add("show");
  setTimeout(function() {
    toast.classList.remove("show");
  }, 3000);




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
