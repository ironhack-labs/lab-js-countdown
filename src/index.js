const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = 1000; // Variable to store the interval

document.querySelector("#time").innerHTML = remainingTime;


// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startBtn = document.querySelector('#start-btn');
startBtn.addEventListener('click', startCountdown);



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  let remainingTime = DURATION;
  document.querySelector("#time").innerHTML = remainingTime;

  if (remainingTime === 10) {
    showToast("⏰ Final countdown! ⏰");
  }

  console.log("Remaining time:", remainingTime);

  const countdownInterval = setInterval(() => {

    if (remainingTime === 6) {
      showToast("Start the engines! 💥")

    }
    remainingTime--;

    console.log("Remaining time:", remainingTime);
    startBtn.disabled = true;
    //     
    document.querySelector("#time").innerHTML = remainingTime;

    if (remainingTime === 0) {
      //startBtn.disabled = false;
      clearInterval(countdownInterval);
      console.log("Countdown finished!");
      showToast("Lift off! 🚀");
    }
  }, timer);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  const toastCard = document.querySelector('#toast');
  console.log(toastCard);
  toastCard.style.visibility = "visible";
  const toastMsg = document.querySelector("#toast-message");
  toastMsg.innerHTML = message;



  const CloseBtn = document.querySelector("#close-toast");
  CloseBtn.addEventListener('click', () => {


    toastCard.style.visibility = "hidden";
    startCountdown();

  })

}

