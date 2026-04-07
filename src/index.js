const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.querySelector("#start-btn");
const time = document.querySelector("#time");
const toast = document.querySelector("#toast");
const closeToast = document.querySelector("#close-toast");

startButton.addEventListener(("click") , () => {
  startCountdown();
})




// ITERATION 2: Start Countdown
startButton.disabled = false;
function startCountdown() {
  console.log("startCountdown called!");
  timer = setInterval(() =>{
    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    }
    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }
    if (remainingTime >= 0) {
      remainingTime--
      time.innerHTML = `${remainingTime}`
      startButton.disabled = true;
    }
    if (remainingTime === 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
      startButton.disabled = false;
    }
  }, 1000);


  // Your code goes here ...
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toast.innerHTML = message;
  // Your code goes here ...
  toast.classList.add("show");
  setTimeout(() =>{
    toast.classList.remove("show");
  }, 3000);



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  closeToast.addEventListener(("click"), () =>{
    toast.classList.remove("show");
  })
}
