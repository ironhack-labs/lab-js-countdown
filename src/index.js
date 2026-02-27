const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

document.getElementById("start-btn").addEventListener("click", startCountdown);


function startCountdown() {

  document.getElementById("start-btn").disabled = true;


  timer = setInterval(() => {

    remainingTime--;


    document.getElementById("time").textContent = remainingTime;


    if (remainingTime === 0) {

      clearInterval(timer);

      showToast("Time's up!");
    }
  }, 1000);

}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");


  const toastCard = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");

  toastMessage.textContent = message;
  toastCard.classList.add("show");

  setTimeout(() => {
    toastCard.classList.remove("show");
  }, 3000);
}
