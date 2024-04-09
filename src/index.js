const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", () => {
  startCountdown();
});



// ITERATION 2: Start Countdown
function startCountdown() {
  document.getElementById("start-btn").disabled = true;

  timer = setInterval(() => {

    const remainTime = document.getElementById("time");
    remainTime.textContent = remainingTime;

    if(remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    } else if(remainingTime === 5) {
      showToast("Start the engines! 💥");
    } else if(remainingTime === 0) {
      showToast("Lift off! 🚀");
      clearInterval(timer);
      document.getElementById("start-btn").disabled = false;
    } 

    remainingTime--;
  }, 1000);


  // Your code goes here ...
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const toast = document.getElementById("toast");
  const toastMessage = document.querySelector("#toast-message");

  toast.classList.add("show");
  toastMessage.textContent = message;

  const timeoutId = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000)

  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  const closeToastBtn = document.getElementById("close-toast");

  closeToastBtn.addEventListener("click", function () {
    toast.classList.remove("show");
    clearTimeout(timeoutId);
  });

  // Your code goes here ...

}
