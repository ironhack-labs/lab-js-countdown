let DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const timeCode = document.getElementById("time");
const toast = document.getElementById("toast");
const closeXToast = document.getElementById("close-toast");
const toastMessage = document.getElementById("toast-message");
// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown appelé !");
  timer = setInterval(() => {
    if (DURATION === 10) {
      showToast();
    } else if (DURATION === 5) {
      showToast();
    } else if (DURATION === 0) {
      showToast();
      clearInterval(timer); // Fin du compte à rebours
    }

    // Affiche la valeur actuelle de DURATION et décrémente
    timeCode.innerText = DURATION;
    console.log(DURATION);
    DURATION--;
  }, 1000);
}

// let timer = setInterval(() => {
//   console.log(DURATION);
//   timeCode.innerText = DURATION;
//   --DURATION;

//   if (DURATION === 0) {
// timeCode.innerText = "0";

//     clearInterval(timer);
//   }

// ITERATION 3: Show Toast
function showToast() {
  console.log("showToast called!");

  toast.classList.add("show");

  if (DURATION === 10) {
    toastMessage.innerHTML = "⏰ Final countdown! ⏰";
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  } else if (DURATION === 5) {
    toastMessage.innerHTML = "Start the engines! 💥";
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  } else if (DURATION === 0) {
    toastMessage.innerHTML = "Lift off! 🚀";
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }

  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  closeXToast.addEventListener("click", () => {
    toast.classList.remove("show");
  });

  // Your code goes here ...
}
