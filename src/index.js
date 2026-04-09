const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

const startBtn = document.querySelector("#start-btn")

// Your code goes here ...


startBtn.addEventListener("click", () => {
  startCountdown();
})



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

    const time = document.querySelector("#time");


  // Your code goes here ...
  startBtn.isdisabled = true;
  remainingTime = DURATION;
  time.innerText = remainingTime;

  timer = setInterval(() => {
    remainingTime--;
    time.innerText = remainingTime;

    if(remainingTime <= 0){
      clearInterval(timer);
      timer = null;
      showToast();
      startBtn.isdisabled = false
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  const toast = document.querySelector("#toast")
  // Your code goes here ...

  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}

  closeToast.addEventListener("click", () => {
    toast.classList.remove("show");
  })
