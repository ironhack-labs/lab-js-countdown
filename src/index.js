const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button
// Your code goes here ...
const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", function () {
  startCountdown();
});

// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...

const closeToastBtn = document.getElementById("close-toast");

closeToastBtn.addEventListener("click", function () {
  const toast = document.getElementById("toast");
  toast.classList.remove("show");


  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }

  remainingTime = DURATION;
  document.getElementById("time").textContent = remainingTime;

  startBtn.disabled = false
});



// ITERATION 2: Start Countdown

// function startCountdown() {
//  //   console.log("startCountdown called!");

//   remainingTime = DURATION;
//   document.getElementById("time").textContent = remainingTime;
//   startBtn.disabled = true;

//   if (timer !== null) {
//     clearInterval(timer);
//   }
//   timer = setInterval(() => {
//     remainingTime--;
//     document.getElementById("time").textContent = remainingTime;

//     if (remainingTime === 0) {
//       clearInterval(timer);
//       timer = null
//       startBtn.disabled = false,
//         showToast("lift off 🚀");
//     }
//   }, 1000);
// }

function startCountdown() {
  remainingTime = DURATION;
  document.getElementById("time").textContent = remainingTime;
  startBtn.disabled = true;

  if (timer !== null) {
    clearInterval(timer);
  }

  showToast("⏰ Final countDown! ⏰");

  timer = setInterval(() => {
    remainingTime--;
    document.getElementById("time").textContent = remainingTime;

    if (remainingTime === 5) {
      showToast("💥 Start the Engines 💥")
    }

    if (remainingTime === 0) {
      clearInterval(timer);
      timer = null,
        startBtn.disabled = false;
      showToast("🚀 Lift off 🚀")

    }
  }, 1000);

}

// ITERATION 3: Show Toast
function showToast(message) {
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");

  toastMessage.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show")
  }, 3000);


  console.log("showToast called!");

}
