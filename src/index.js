const DURATION = 10 // 10 seconds
let remainingTime = DURATION // Countdown starting from 10
let timer = DURATION // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButtn = document.querySelector('#start-btn')
startButtn.addEventListener('click', () => {
	console.log('Start button called')
	startCountdown()
})

// ITERATION 2: Start Countdown
function startCountdown() {
	console.log('startCountdown called!')

	// Your code goes here ...
	const time = document.querySelector('#time')
	var intervalID = setInterval(() => {
		if (timer > 0) {
			if (timer === 10) {
				showToast('⏰ Final countdown! ⏰')
			} else if (timer === 5) {
				showToast('Start the engines!')
			}
			timer -= 1
		} else {
			showToast('Lift off! 🚀')

			clearInterval(intervalID)
		}

		time.textContent = timer
	}, 1000)
}

// ITERATION 3: Show Toast
function showToast(message) {
	console.log('showToast called!')

	// Your code goes here ...
	document.querySelector('#toast-message').textContent = message
	document.querySelector('.toast').classList.add('show')

	// BONUS: ITERATION 4: TOAST CLOSE BUTTON

	// Your code goes here ...
	setTimeout(() => {
		document.querySelector('.toast').classList.remove('show')
	}, 3000)
}
