const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", function() {
  startCountdown();
  document.querySelector("#start-btn").disabled = true;
});




// ITERATION 2: Start Countdown
function startCountdown() {
  // console.log("startCountdown called!");


  // Your code goes here ...
  showToast("⏰ Final countdown! ⏰");
  timer = setInterval(function() {
    remainingTime -= 1;
    console.log(remainingTime);
    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }
    document.querySelector("#time").innerText = remainingTime;
    if (remainingTime === 0) {
      clearTimeout(timer);
      showToast("Lift off! 🚀");
    }
  }, 1_000);  
}




// ITERATION 3: Show Toast
function showToast(message) {
  // console.log("showToast called!");

  // Your code goes here ...

  document.querySelector("div#toast").classList.add("show");
  document.querySelector("#toast-message").innerText = message;
  setTimeout(function () {
    document.querySelector("div#toast").classList.remove("show");
  }, 3_000);



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  document.querySelector("#close-toast").addEventListener("click", function() {

    document.querySelector("div#toast").classList.remove("show");
    clearInterval(timer);
  });
}
