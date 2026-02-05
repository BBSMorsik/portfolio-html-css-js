const links = document.querySelectorAll('.menu-list__link')
const btn = document.querySelector('.main__button')

const allLinks = [...links, btn]

allLinks.forEach(link => {
	link.addEventListener('click', event => {
		event.preventDefault()
		const id = link.getAttribute('href')
		const section = document.querySelector(id)
		if (section) {
			section.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	})
})
