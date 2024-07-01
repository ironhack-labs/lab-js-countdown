const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

const toast = document.querySelector("#toast");
const toastMessage = document.querySelector("#toast-message");


// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startButton = document.querySelector("#start-btn");


startButton.addEventListener("click", () => {
  startCountdown();
})


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

  toastMessage.innerText = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
    startButton.disabled = false;
  }, 3000);



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

  const closeButton = document.querySelector("#close-toast");

  closeButton.addEventListener("click", () => {
    toast.classList.remove("show");
    clearTimeout(timer);
  })
}



// ITERATION 2: Start Countdown
function startCountdown() {

  startButton.disabled = true;

  // Your code goes here ...
  const timer = setInterval(() => {
    document.getElementById("time").innerText = remainingTime;



    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    } else if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    } else if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
      remainingTime = DURATION;
      startButton.disabled = false;
    } remainingTime--;
  }, 1000);

}

