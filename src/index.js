const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const buttonStart = document.querySelector("#start-btn");
const time = document.querySelector("#time");
const toast = document.querySelector("#toast");
const closeToast = document.querySelector("#close-toast");
const toastMessage = document.querySelector("#toast-message");

time.innerHTML = remainingTime

// ITERATION 2: Start Countdown
function startCountdown() {

  buttonStart.addEventListener("click", () => {

    if (timer !== null) { // evita multiples timers
      return;
    }; 

    timer = setInterval(() => {
      remainingTime--;
      time.innerHTML = remainingTime;

      if(remainingTime === 9){ 
        showToast("⏰ Final countdown! ⏰")
      
      } else if (remainingTime === 5){
        showToast("Start the engines! ✨")

      } else if (remainingTime === 0) {
        clearInterval(timer);
        buttonStart.disabled = true;
        showToast("Lift off! 🚀");
        time.innerHTML = 0;
      

      }
    }, 1000)
  })
}

startCountdown()


let toastTimeOut;

// ITERATION 3: Show Toast

function showToast(message) {

  toastMessage.innerHTML = message;

  toast.classList.add("show");

  clearTimeout(toastTimeOut); // evita solapamientos

  toastTimeOut = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000)

}


// BONUS: ITERATION 4: TOAST CLOSE BUTTON

closeToast.addEventListener(("click"), () => {
    clearTimeout(toastTimeOut);
    toast.classList.remove("show");
  } )


