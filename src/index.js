const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const strBtn = document.getElementById("start-btn")

strBtn.addEventListener("click", () => {
  startCountdown();
});



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  document.getElementById("start-btn").disabled = true; 

  let timer = 10;
  const intervalId = setInterval(() => {
    timer--;
    const seconds = timer.toString().padStart(2, "0");
    document.getElementById("time").innerText = `${seconds}`;

    if (timer <= 0) {
      clearInterval(intervalId);
      showToast();
    }
  }, 1000);
}





// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

const toast = document.getElementById("toast")

toast.classList.add("show")

setTimeout(() => {
 toast.classList.remove("show");
}, 3000);	

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
