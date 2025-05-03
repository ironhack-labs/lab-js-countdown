const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", () => startCountdown()); 





// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  startButton.disabled = true;

  timer = setInterval(() => {
    remainingTime--;
    let time = document.querySelector("#time");
    time.innerText = remainingTime;
    if(remainingTime <= 0) {
      clearInterval(timer);
      showToast();
    }
  }, 10)

}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const toast = document.querySelector("#toast");
  toast.classList.add("show");
  timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000)

  const closeBtn = document.querySelector("#close-toast");
  closeBtn.addEventListener("click", () => {
    clearTimeout(timer);
    toast.classList.remove("show");
  })


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
