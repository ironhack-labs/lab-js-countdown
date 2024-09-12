const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
document.querySelector("#start-btn").addEventListener("click", () => {
  // console.log(startCountdown());
  startCountdown(); //invocando la funcion.
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  // Your code goes here ...
  document.querySelector("button").disabled = true;

  timer = window.setInterval(() => {
    document.querySelector("#time").innerText = remainingTime--;
    if (remainingTime < 0) {
      window.clearInterval(timer);
      console.log("termina");
      showToast();
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  let final = document.querySelector("#toast");
  final.classList.add("show");
  setTimeout(() => {
    final.classList.remove("show");
    remainingTime = 10;
  }, 3000);
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...
