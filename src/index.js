const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

const startBtn = document.querySelector("#start-btn");
startBtn.addEventListener("click", () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  startBtn.disabled = true;
  console.log("startCountdown called!");

  const intervalId = setInterval(() => {
    //our count-down
    if (remainingTime > 0) {
      remainingTime--; //decrementing remaining time
      let time = document.querySelector("#time"); //getting the html element presenting time
      time.textContent = remainingTime; //setting presented in html time equal to the remaining time
      // Check inside the same tick instead of waiting for the next one
      if (remainingTime === 0) {
        showToast();
        clearInterval(intervalId); //stop count-down
      }
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  //card
  const card = document.querySelector("#toast"); //get the element
  const cardStyle = card.classList; //get the style of the element
  cardStyle.add("show"); //adding the style

  //setting the timeout to make the card invisible
  let timeoutId = setTimeout(() => {
    cardStyle.remove("show");
  }, 3000);

  //x-button (can stop the timeout even earlier)
  const closeBtn = document.querySelector(`span#close-toast`);
  closeBtn.addEventListener("click", () => {
    clearTimeout(timeoutId);
    cardStyle.remove("show");
  });
}
