const timerBlock = document.querySelector('.timer__time')
const dateDeadLine = new Date('2026-05-30')

function updateClock(deadLine) {
	const timeRemaining = (deadLine - new Date()) / 1000

	if (timeRemaining <= 0) {
		clearInterval(interval)
		timerBlock.textContent = `00д 00ч 00м 00с`
		return
	}

	const days = Math.floor(timeRemaining / (60 * 60 * 24))
	const hours = Math.floor((timeRemaining / (60 * 60)) % 24)
	const minutes = Math.floor((timeRemaining / 60) % 60)
	const seconds = Math.floor(timeRemaining % 60)

	timerBlock.textContent =
		`${String(days).padStart(2, '0')}d ` +
		`${String(hours).padStart(2, '0')}h ` +
		`${String(minutes).padStart(2, '0')}m ` +
		`${String(seconds).padStart(2, '0')}s`
}
updateClock(dateDeadLine)
const interval = setInterval(() => updateClock(dateDeadLine), 1000)
