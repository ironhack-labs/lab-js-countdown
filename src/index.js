let remainingTime = 10; // Countdown starting from 10

const startButton = document.querySelector("#start-btn");
const time = document.querySelector("#time");
const toast = document.querySelector(".toast");
const closeToast = document.querySelector("#close-toast");
const toastMessage = document.querySelector("#toast-message");



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

startButton.addEventListener("click", startCountdown);
closeToast.addEventListener("click", closeToastFunc);



// ITERATION 2: Start Countdown
function startCountdown() {

  console.log("startCountdown called!");

  startButton.disabled = true;

  remainingTime = 10;

  const intervalFunc = setInterval(() => {
    if (remainingTime === 0) {

      startButton.disabled = false;
      clearInterval(intervalFunc);

    } else if (remainingTime === 1) {

      toastMessage.innerText = `Lift off! 🚀`;
      showToast();
      remainingTime--;
      time.innerText = remainingTime;

    } else if (remainingTime === 6) {

      toastMessage.innerText = `Start the engines! 💥`;
      showToast();
      remainingTime--;
      time.innerText = remainingTime;

    } else {
      toastMessage.innerText = `⏰ Final countdown! ⏰`;
      showToast();
      remainingTime--;
      time.innerText = remainingTime;

    }

  }, 1000);

}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  toast.setAttribute("class", "toast show")
  toast.style.visibility = "visible";

  setTimeout(closeToastFunc, 3000);

}


// BONUS: ITERATION 4: TOAST CLOSE BUTTON

function closeToastFunc() {
  toast.style.visibility = "hidden";


}
