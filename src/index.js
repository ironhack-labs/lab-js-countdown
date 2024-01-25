const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
let myButton = document.querySelector('#start-btn');
myButton.addEventListener("click", function (e) {
  startCountdown()
})

/***
 * let i = 1;
const intervalId = setInterval(function () {
  console.log(i);

  i++;

  if (i > 10) {
    clearInterval(intervalId);
  }
}, 1000);

 */

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...
  const intervalId = setInterval(function () {
    remainingTime--
    let timeElt = document.querySelector('div#time');
    timeElt.innerHTML = remainingTime
    if(remainingTime <= 0){
      clearInterval(intervalId);
    }

  }, 1000);

}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toastDiv = document.querySelector('div#toast')
  //toastDiv.addEventListener('click', () => {
   // toastDiv.style.visibility = 'visible'; 
   toastDiv.classList.add("show")
   console.log(toastDiv.outerHTML);
  //},3000)
  toastDiv.addEventListener('click', () => {
    toastDiv.classList.remove("show")
  },3000)



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
