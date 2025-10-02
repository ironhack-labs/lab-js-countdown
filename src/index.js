const DURATION = 10; // 10 seconds
let remainingTime = document.getElementById('time');
console.log(remainingTime); // Countdown starting from 10
let timer = 1000; // Variable to store the interval


// ITERATION 1: Add event listener to the start button
let startButton = document.getElementById('start-btn');
startButton.addEventListener('click',startCountdown);


// ITERATION 2: Start Countdown
function startCountdown() {
  let i = DURATION;
  remainingTime.textContent = i;
  startButton.disabled = true;//Change style of the button to disabled

  let intervalId = setInterval(function () {
  if (i >= 0) {
    console.log(i);
    remainingTime.textContent = i;

  } 
  else {
    console.log('End!');
    clearInterval(intervalId);
    remainingTime.textContent = 10;
    startButton.disabled = false;//Remove button style to normal
  }
  i--;
}, timer);

}
  


// ITERATION 3: Show Toast


let toastCard = document.getElementById('toast');//find toast
toastCard.classList.add('show');//make toast visible

setTimeout(function(){
  toastCard.classList.remove('show')
},3000);



// let timeOut = setTimeout(showToast, 1000);




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...


