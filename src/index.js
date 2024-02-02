const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
let timeInDom = document.querySelector("#time")
let toastText = document.querySelector("#toast")
let showToastMessage = document.querySelector("#toast-message")



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
let startBotton = document.querySelector("#start-btn");
startBotton.addEventListener("click", startCountdown);
startBotton.disabled = false;


let setIntervalId;
let setInterval2Id;


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  // Your code goes here ...
  setIntervalId = window.setInterval(() => {
    startBotton.disabled = true;
    remainingTime--
    timeInDom.innerText = remainingTime

    if (remainingTime === 9) {
      showToast(showToastMessage.innerText)
    }

    if (remainingTime === 5) {
      showToast(showToastMessage.innerText)
    }  

    if (remainingTime === 0) {
      showToast(showToastMessage.innerText)
    }

    if (remainingTime === 0) {
      clearInterval(setIntervalId)
    }
    console.log(remainingTime)

  }, 1000)

  
  
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  toastText
  console.log(toastText)
  toastText.classList.add("show")

  if (remainingTime === 9) {
    showToastMessage.innerText = "⏰ Final countdown!"
  }

  if (remainingTime === 5) {
    showToastMessage.innerText = "Start the engines! 💥"
  }  

  if (remainingTime === 0) {
    showToastMessage.innerText = "Lift off! 🚀"
  }
  //showToastMessage.innerText = "Se acabó el tiempo!"

  setInterval2Id = window.setInterval(() => {
    

    if (remainingTime < 0) {
      clearInterval(setInterval2Id)
    }
  }, 1500)

  setTimeout(() => {
    toastText.classList.remove("show");
  }, 3000);
  
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON
// Your code goes here ...

let finishShowCastButton = document.querySelector("#close-toast")
finishShowCastButton.addEventListener("click", () => {
  toastText.classList.remove("show");
})



// BONUS: ITERATION 5: MORE TOATS
