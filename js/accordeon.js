const accordeon = document.querySelector('.feature-list')
const accordeonBtn = accordeon.querySelectorAll('.feature__link')

accordeonBtn.forEach(btn => {
	btn.addEventListener('click', () => {
		const wasActive = btn.classList.contains('feature__link_active')
		accordeonBtn.forEach(button => {
			button.classList.remove('feature__link_active')
			button.nextElementSibling.classList.add('hidden')
		})

		if (!wasActive) {
			btn.classList.add('feature__link_active')
			btn.nextElementSibling.classList.remove('hidden')
		}
	})
})
