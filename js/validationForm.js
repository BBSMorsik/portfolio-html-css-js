;(function () {
	const form = document.querySelector('.form-test-drive')
	if (!form) return

	const validate = {
		name: value => {
			if (!value) return 'Imię jest wymagane'
			if (value.length < 3 || value.length > 10)
				return 'Imię musi mieć od 3 do 10 znaków'
			return ''
		},
		mail: value => {
			if (!value) return 'Adres e-mail jest wymagany'
			if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
				return 'Wprowadź poprawny adres e-mail'
			return ''
		},
		phone: value => {
			if (!value) return 'Numer telefonu jest wymagany'
			if (!/^\+?[0-9\s\-()]{7,20}$/.test(value))
				return 'Wprowadź poprawny numer telefonu'
			return ''
		},
	}

	function setError(input, message) {
		const error = input.closest('.form-group').querySelector('.error')
		error.textContent = message
		input.classList[message ? 'add' : 'remove']('error-input')
	}

	form.addEventListener('submit', function (event) {
		event.preventDefault()
		let hasErrors = false

		Object.keys(validate).forEach(name => {
			const input = this[name]
			const message = validate[name](input.value.trim())
			setError(input, message)
			if (message) hasErrors = true
		})

		if (!hasErrors) {
			const btn = document.querySelector('.form__button')
			btn.disabled = true
			btn.textContent = 'Wysyłanie...'

			const formData = {
				userName: this.name.value.trim(),
				email: this.mail.value.trim(),
				phone: this.phone.value.trim(),
			}

			fetch('https://jsonplaceholder.typicode.com/posts', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			})
				.then(res => res.json())
				.then(data => {
					console.log('Odpowiedź serwera:', data)
					form.reset()
					Object.keys(validate).forEach(name => setError(this[name], ''))
					alert('Formularz został pomyślnie wysłany!')
				})
				.catch(err => {
					console.error('Błąd wysyłania:', err)
					alert('Wystąpił błąd. Spróbuj ponownie.')
				})
				.finally(() => {
					btn.disabled = false
					btn.textContent = 'Wyślij'
				})
		}
	})

	Object.keys(validate).forEach(name => {
		const input = form[name]
		if (!input) return

		input.addEventListener('blur', () => {
			const message = validate[name](input.value.trim())
			setError(input, message)
		})

		input.addEventListener('input', function () {
			if (this.classList.contains('error-input')) {
				const message = validate[name](this.value.trim())
				setError(this, message)
			}
		})
	})
})()
