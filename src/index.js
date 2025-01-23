const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startBtn = document.querySelectorAll("#start-btn");

startBtn.forEach((btnElement) => {
  btnElement.addEventListener("click", () => {
    startCountdown();
    btnElement.disabled = true;
  });
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");

  // Your code goes here ...

  let timeRemaining = 10;
  const timerID = setInterval(() => {
    //console.log("The time is decreasing, now is: " + timeRemaining);

    const timeElm = document.getElementById("time");
    timeElm.innerText = timeRemaining;

    if (timeRemaining <= 0) {
      showToast();
      clearInterval(timerID);
    }

    timeRemaining--;
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toastElm = document.getElementById("toast");
  toastElm.classList.add("show")

  setTimeout(() => {
    toastElm.classList.remove("show")
  }, 3000)
  

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  const closeBtn = document.querySelectorAll("#close-toast");
  

  closeBtn.forEach((btnElement) => {
    btnElement.addEventListener("click", () => {
    toastElm.classList.remove('show');
    });
  });

  
}
