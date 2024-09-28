  const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let toastTimer = null;



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", () => {
  startCountdown();
})



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  startBtn.setAttribute("disabled", true);

  remainingTime = DURATION;
  document.getElementById("time").innerText = remainingTime;

    showToast("⏰ Final countdown! ⏰");

  timer = setInterval(() => {
    remainingTime--;
    document.getElementById("time").innerText = remainingTime;

    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    } else if (remainingTime === 0) {
      clearInterval(timer);
      startBtn.removeAttribute("disabled");
      showToast("Lift off! 🚀");
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");
  const closeBtn = document.getElementById("close-toast");

  toastMessage.innerText = message;


  clearTimeout(toastTimer);
  // Your code goes here ...
  

  toast.classList.add("show");
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");

  }, 3000)
  
  closeBtn.addEventListener("click", () => {
    clearTimeout(toastTimer);
    toast.classList.remove("show");
  });


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
