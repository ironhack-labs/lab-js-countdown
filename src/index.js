const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button


const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", () => {
  startCountdown();
})



// ITERATION 2: Start Countdown
const time = document.getElementById("time");

function startCountdown() {
  console.log("startCountdown called!");
  document.getElementById("start-btn").disabled = true;
  let counter = 10;
  if (counter === 10){
    showToast("⏰ Final countdown! ⏰");
  }
  const intervalId = setInterval(() => {
    time.textContent = `${counter-1}`;
    counter--;
    console.log(counter);
    if (counter === 5){
      showToast("Start the engines! 💥");
    }
    if (counter <= 0) {
      clearInterval(intervalId);
      document.getElementById("start-btn").disabled = false;
      showToast("Lift off! 🚀");
    }
  }, 1000);

 
}




// ITERATION 3: Show Toast


function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
    const toastCard = document.getElementById("toast");
    const toastMessage = document.getElementById("toast-message");
    toastMessage.textContent = `${message}`;
    toastCard.style.display = "block";
    toastCard.classList.add("show");
    setTimeout(() => {
      toastCard.classList.remove("show");
    }, 3000)
  

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  const closeToast = document.getElementById("close-toast");
  closeToast.addEventListener("click", () => {
    clearTimeout();
    toastCard.classList.remove("show");
  })
}
