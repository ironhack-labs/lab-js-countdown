const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startBtn.addEventListener("click", startCountdown);



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  timer = setInterval(() => {
    remainingTime--

    const catTag = document.querySelector('#time')
    catTag.innerHTML = `${remainingTime}`
    document.querySelector('#startBtn').disabled = true;

    if (remainingTime === 0) {
      clearInterval(timer)
      showToast()

    }

  }, 1000)

}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const list = document.querySelector('#toast').classList;
  list.add('show');

  const timeoutId = setTimeout(() => {
    const list = document.querySelector('#toast').classList;
    list.remove('show');

  }, 3000)

  if (timeoutId === 0) {
    clearTimeout(timeoutId)

  }


}






// BONUS: ITERATION 4: TOAST CLOSE BUTTON

// Your code goes here ...


