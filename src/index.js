const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval


const strtBtn = document.querySelector('#start-btn');
strtBtn.addEventListener('click', function() {
  startCountdown();
});


function startCountdown() {
  console.log("startCountdown called!");
  const currTime = document.querySelector('#time');
  currTime.innerHTML = `${remainingTime}`;
  strtBtn.disabled = true;
  showToast("⏰ Final countdown! ⏰");

  const counterId = setInterval(() => {
    remainingTime -= 1;
    currTime.innerHTML = `${remainingTime}`;

    
    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }
    if (remainingTime <= 0) {
      clearInterval(counterId);
      showToast('Lift off! 🚀');
    }
  }, 1000);
}


function showToast(message) {
  console.log("showToast called with message:", message);

  let tstEl = document.querySelector('#toast');
  let tstMessage = document.querySelector('#toast-message'); 
  tstMessage.textContent = message; 
  tstEl.classList.add('show');

  
  setTimeout(() => {
    tstEl.classList.remove("show");
  }, 3000);

  let tstClose = document.querySelector('#close-toast');
  tstClose.addEventListener('click', () => {
    tstEl.classList.remove('show');
  });
}
