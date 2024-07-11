const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

//< !--Time Remaining-- >
//<div id="time">10</div>



// ITERATION 1: Add event listener to the start button

// Your code goes here ...


document.querySelector("#start-btn").onclick = () => {
  startCountdown()

}


// ITERATION 2: Start Countdown
function startCountdown() {

  console.log("startCountdown called!");

  timer = setInterval(() => {
    remainingTime--




    if (remainingTime === 0) {
      clearInterval(setIntervalId)

    }

  }, 1000)


}
let counter = 0

const intervalId = setInterval(() => {
  counter--
  document.querySelector('h1 span').innerHTML = counter

  if (remainingTime === 0) clearInterval()
}, 1000)

document.querySelector('button').onclick = () => {
  console.log('El intervalo con ID número', intervalId, 'ha sido detenido')
  clearInterval(intervalId)
}








// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10