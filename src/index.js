let remainingTime = 10; // Countdown starting from 10

const startButton = document.querySelector("#start-btn");
const time = document.querySelector("#time");
const toast = document.querySelector(".toast");
const closeToast = document.querySelector("#close-toast");
const toastMessage = document.querySelector("#toast-message");

const msg1 = `Lift off! 🚀`
const msg2 = `Start the engines! 💥`
const msg3 = `Start the engines! 💥`

// ITERATION 1: Add event listener to the start button

// Your code goes here ...

startButton.addEventListener("click", startCountdown);
closeToast.addEventListener("click", closeToastFunc);

// ITERATION 2: Start Countdown

function startCountdown() {

  console.log("startCountdown called!");

  startButton.disabled = true;

  remainingTime = 10;

  showToast(msg1);

  const intervalFunc = setInterval(() => {

    if (remainingTime > 0) {

      switch(remainingTime) {

        case 10:
          showToast(msg1);
          break;

        case 6:
          showToast(msg2);
          break;
      
        case 1:
          showToast(msg3);
          break;
      
      }

      remainingTime--;
      time.innerText = remainingTime;
      

    } else {
      
      time.innerText = remainingTime;
      startButton.disabled = false;
      clearInterval(intervalFunc);

    }
    

  }, 1000);

}





// ITERATION 3: Show Toast
function showToast(message) {

  console.log("showToast called!");

  toastMessage.innerText = message;

  toast.classList.remove(`hide`);
  toast.classList.add(`show`);

  setTimeout(closeToastFunc, 3000);

}


// BONUS: ITERATION 4: TOAST CLOSE BUTTON

function closeToastFunc() {

  toast.classList.remove(`show`);
  toast.classList.add(`hide`);

}
