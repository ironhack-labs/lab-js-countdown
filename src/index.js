const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const allBtn = document.getElementById("start-btn")

allBtn.addEventListener("click", startCountdown);



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  const startBtn = document.querySelector("#start-btn")
  const timeDisplay = document.querySelector("#time");
  const toast = document.querySelector("#toast");
  const closeToast = document.querySelector("#close-toast");

  let count = 10
  startBtn.disabled = true;

  // Show initial value immediately
  timeDisplay.textContent = count;

  const id = setInterval(() => {
    count--;

    // Update the display every second
    timeDisplay.textContent = count;

    if (count === 0) {
      clearInterval(id);

      // Re-enable button
      startBtn.disabled = false;

      toast.classList.add("show");

      setTimeout(() => {
        toast.classList.remove("show");
      }, 3000);

      // Show final value (optional but safe)
      timeDisplay.textContent = 0;

      // Trigger toast
      showToast();
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const list = element.classList;
list.add("myStyle");




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  closeToast.addEventListener("click", () => {
    clearTimeout(toastTimeoutId);
    toast.classList.remove("show");
  });

}
