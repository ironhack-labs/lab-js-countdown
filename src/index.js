const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

function showCurrentTime () {
  const timeContainer = document.getElementById("time");
  timeContainer.innerText = `${remainingTime}`;
}

// ITERATION 1: Add event listener to the start button

const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", () => {
  startCountdown();
})


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  startButton.disabled = true;

  timer = setInterval(() => {
    remainingTime--;

    if(remainingTime < 0){
      clearInterval(timer);
      showToast();
    } else {
      showCurrentTime();
    }

  }, 1000);
}

const toastCard = document.getElementById("toast");

// ITERATION 3: Show Toast
function showToast() {
  console.log("showToast called!");
  

  toastCard.classList.add("show");

  setTimeout(() => {
    toastCard.classList.remove("show");
  }, 3000);


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
