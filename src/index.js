const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startButton = document.getElementById("start-btn");
  startButton.addEventListener("click", startCountdown);



// ITERATION 2: Start Countdown

const timeElement = document.getElementById("time");

function startCountdown() {
  console.log("startCountdown called!");
  startButton.disabled = true;
  remainingTime = 10;
  timeElement.innerText = `${remainingTime} seconds`;
  let countdown = setInterval(function() {
    remainingTime--;
    timeElement.innerText = `${remainingTime} seconds`;
    if (remainingTime <= 0) {
      clearInterval(countdown); 
      timeElement.innerText = "Time's up!";
      startButton.disabled = false;
      showToast();
    }
  }, 1000);
  
};




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const theToast = document.getElementById("toast");
  theToast.style.display = "block";
  theToast.classList.add("show");




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  const closeButton = document.getElementById("close-toast");
  toast.classList.add("show");
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show"); 
  }, 3000);

  closeButton.addEventListener("click", () => {
    clearTimeout(toastTimeout); 
    toast.classList.remove("show");

});
};
