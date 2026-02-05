const tabBtns = document.querySelectorAll('.design-list__item')
const tabDescription = document.querySelectorAll('.design__descr')
const tabImages = document.querySelectorAll('.design-images')

function changeContent(arr, dataValue) {
	arr.forEach(elem => {
		if (elem.dataset.tabsField === dataValue) {
			elem.classList.remove('hidden')
		} else {
			elem.classList.add('hidden')
		}
	})
}

tabBtns.forEach(btn => {
	btn.addEventListener('click', event => {
		const dataValue = btn.dataset.tabsHandler

		changeContent(tabDescription, dataValue)
		changeContent(tabImages, dataValue)

		tabBtns.forEach(btn => {
			if (btn === event.target) {
				btn.classList.add('design-list__item_active')
			} else {
				btn.classList.remove('design-list__item_active')
			}
		})
	})
})
