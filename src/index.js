const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn");
startButton.onclick = () => {
  startCountdown();
  // const toast = document.getElementById('toast');
  // toast.classList.toggle('show');

};

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...
  const intervalId = setInterval(function () {
    timerMessages()
    if (remainingTime >= 0) {
      console.log(remainingTime);
      const time = document.getElementById("time");
      time.innerHTML = remainingTime;

    } else {
      console.log("Liftoff!!!!");
      clearInterval(intervalId);
      showToast("Lift off! 🚀");
    }

    remainingTime--;
  }, 1000);

}

// ITERATION 3: Show Toast
function showToast(message) {
  // console.log("showToast called!");
  // console.log(`remaining::`, remainingTime);
  // Your code goes here ...

  const toast = document.getElementById("toast");
  // if (remainingTime < 1) {
    const toastMessage = document.getElementById("toast-message");
    // message = toastMessage.innerHTML;
    toastMessage.innerHTML = message;

    toast.classList.add("show");
    // setTimeout(() => {
    //   toast.classList.remove("show");
    // }, 2500);
  // }

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  const closeButton = document.getElementById("close-toast");
  closeButton.onclick = () => {
    toast.classList.remove("show");
  };

}


function timerMessages() {
  if (remainingTime <= 10 && remainingTime > 5) {
    showToast("⏰ Final countdown! ⏰"); 
  }
  if (remainingTime < 5 && remainingTime > 0) {
    showToast("Start the engines! 💥");
  }
}


