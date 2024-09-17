const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  startBtn.disabled = true;
  let time = document.getElementById("time")
 

  const counterInterval = setInterval(countCb, 1000);

  let counter = 10;
  function countCb() {
    console.log("Miau");



    counter--;
    if (counter >= 0) {
      time.innerText = counter;
    } else {
      clearInterval(counterInterval);
    }
    if (counter === 5) {
      showToast("Start the engines! 💥");

    }
    if (counter === 0) {
      showToast("Lift off! 🚀");
      time.style.border = "8px solid #a70e32"
      time.style.color = "#a70e32"
    }
  }

  showToast("⏰ Final countdown! ⏰")

}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  let toast = document.getElementById("toast");
  toast.classList.add("show");

  let hiddeToast = setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  let closeToastBtn = document.getElementById("close-toast");

  closeToastBtn.addEventListener("click", () => {
    toast.classList.remove("show");
    clearTimeout(hiddeToast);
  });

  // indiviual messages
  let messageID = document.getElementById("toast-message")

  messageID.innerText = message


}
