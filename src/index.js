let DURATION = 11 // 10 seconds
let remainingTime = DURATION // Countdown starting from 10
let timer = null // Variable to store the interval
let startBtn = document.getElementById('start-btn')
let mm = document.getElementById('toast')
let mess = document.getElementById('toast-message')
let time = document.getElementById('time')
let phrases0 = 'Lift off! 🚀'
let phrases1 = '⏰ Final countdown! ⏰'
let phrases2 = 'Start the engines! 💥'

// ITERATION 1: Add event listener to the start button
startBtn.addEventListener('click', () => {
	startCountdown()
})
// Your code goes here ...

// ITERATION 2: Start Countdown
function startCountdown() {
	console.log('startCountdown called!')

	// Your code goes here ...
	let timer = setInterval(() => {
		DURATION--
		if (DURATION === 0) {
			time.innerHTML = DURATION
			showToast(phrases0)
			clearInterval(timer)
		} else if (DURATION === 5) {
			time.innerHTML = DURATION
			showToast(phrases1)
		} else if (DURATION === 9) {
			time.innerHTML = DURATION
			showToast(phrases2)
		} else {
			time.innerHTML = DURATION
		}
	}, 1000)
}

// ITERATION 3: Show Toast
function showToast(message) {
	mm.classList.add('show')
	console.log('showToast called!')
	mess.innerHTML = message

	// Your code goes here ...

	// BONUS: ITERATION 4: TOAST CLOSE BUTTON

	// Your code goes here ...
}
