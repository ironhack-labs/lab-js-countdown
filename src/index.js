const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = 10; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...




// ITERATION 2: Start Countdown
// Your code goes here ...
let startBtnNode = document.querySelector("#start-btn")
let counterNode = document.querySelector("#time");
let toastNode = document.querySelector("#toast");


startBtnNode.addEventListener("click", () => {
  startCountdown();
});

function showToast(message) {
  console.log("showToast called!");
  toastNode.classList.toggle("show")

}

function startCountdown() {
  console.log("startCountdown called!");
  const intervalId = setInterval(() => {
    timer--;
    counterNode.innerText = timer;
  
    if (timer === 0) {
      clearInterval(intervalId);
      showToast()
    }
  }, 1000);
}


// ITERATION 3: Show Toast




// Your code goes here ...

// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...

