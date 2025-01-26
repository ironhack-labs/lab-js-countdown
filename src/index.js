const DURATION = 10; 
let remainingTime = DURATION; 
let timer = null; 

const timeElement = document.getElementById('time');
const startButton = document.getElementById('start-btn');
const toastElement = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');
const closeToastButton = document.getElementById('close-toast');
// التحقق من تحميل العناصر
console.log("JavaScript file loaded!");
if (!timeElement || !startButton || !toastElement) {
  console.error("One or more elements not found!");
}

startButton.addEventListener('click', startCountdown);
function startCountdown() {
  console.log("startCountdown called!");

  remainingTime = DURATION;
  timeElement.textContent = remainingTime; 

  if (timer) {
    clearInterval(timer);
  }
  // تشغيل العداد كل ثانية
  timer = setInterval(() => {
    
    remainingTime--;
    timeElement.textContent = remainingTime; 

    if (remainingTime == 0) {
      clearInterval(timer); 
      showToast("Countdown finished! 🚀");
    }
  }, 1000); 
}
function showToast(message) {
  toastMessage.textContent = message;
  toastElement.style.display = "block"; 

closeToastButton.addEventListener('click', () => {
  toastElement.style.display = "none"; 
});}