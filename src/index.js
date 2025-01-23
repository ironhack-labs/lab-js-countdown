const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const btnStart = document.getElementById('start-btn');
btnStart.addEventListener('click', () => {
  startCountdown();
  setTimeout(() => {
    btnStart.disabled = true;
  }, 100);
  setTimeout(() => {
    btnStart.disabled = false;
  }, 11500);
});

// ITERATION 2: Start Countdown

function startCountdown() {
  console.log("startCountdown called!");
  // Your code goes here ...

  const time = document.getElementById('time')
  let count = 10;

  const newTimer = setInterval(function () {
    time.textContent = `${count}`;
    count--;
    if (count === 9) {
      showToast("⏰ Final countdown! ⏰");
    } else if (count === 5) {
      showToast("Start the engines! 💥");
    } else if (count < 0) {
      clearInterval(newTimer); 
      console.log('counter finish');
      showToast("Lift off! 🚀");
    }
  }, 1000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
const toast = document.querySelector('#toast');
toast.textContent = message;
toast.classList.add('show');
setTimeout(() => {
  toast.classList.remove('show');
}, 3000);

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
document.getElementById('close-toast');
toast.addEventListener('click',function(){
  console.log("aqui")
toast.classList.remove('show')
});

}
