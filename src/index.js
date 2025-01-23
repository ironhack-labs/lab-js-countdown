const DURATION = 12; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const btnStar = document.getElementById("start-btn");
const timeShow = document.getElementById("time");
const toastContainer = document.getElementById("toast");
const closeToast = document.getElementById("close-toast");

timeShow.textContent = DURATION

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
btnStar.onclick = () => {
  startCountdown()
}



// ITERATION 2: Start Countdown
function startCountdown() {
  timer = null
  btnStar.textContent = 'Start Countdown';
  console.log("startCountdown called!");
  btnStar.setAttribute("disabled", true);

  timer = setInterval(() => {

    remainingTime -= 1;
    if (remainingTime >= 0) {
      timeShow.innerText = remainingTime;
      switch (remainingTime) {
        case 10:
          showToast("⏰ Final countdown! ⏰")
          break;
        case 5:
          showToast("Start the engines! 💥")
          break;

        case 0:
          showToast("Lift off! 🚀")
          break;


        default:
          break;

      }

    } else {

      btnStar.textContent = 'Return';
      btnStar.removeAttribute("disabled", true);

      if (btnStar.textContent === 'Return') {
        remainingTime = DURATION;
        timeShow.textContent = DURATION;


      }
      showToast();
      clearInterval(timer);
    }
  }, 1000);

  // Your code goes here ...
}





// ITERATION 3: Show Toast
function showToast(message) {
  toastContainer.className = "toast";
  const toastmessage = document.getElementById("toast-message");
  console.log("showToast called!");

  if (message == null) {
    toastmessage.innerText = "Countdown finished!";
  } else {
    toastmessage.textContent = message;
  }

  toastContainer.className += " show";

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  closeToast.onclick = () => {
    toastContainer.className = "toast";
  };
}

const misMensa = (mensaje) => {
  // Your code goes here ...
};
