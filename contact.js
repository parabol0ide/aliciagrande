{
	const scriptURL = 'https://api.web3forms.com/submit'
	const form = document.getElementById('contact-form')
	const result = document.getElementById('contact-result')

	window.onload = function () {
		form.reset()
	}

	form.addEventListener('submit', function (e) {
		e.preventDefault()
		const formData = new FormData(form)
		const object = Object.fromEntries(formData)
		const json = JSON.stringify(object)
		result.innerHTML = 'Enviando...'

		fetch(scriptURL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: json,
		})
			.then(async (response) => {
				let json = await response.json()
				if (response.status == 200) {
					form.reset()
					result.innerHTML = 'Mensaje enviado.'
				} else {
					console.log(response)
					result.innerHTML = json.message
				}
			})
			.catch((error) => {
				console.log(error)
				result.innerHTML = 'Algo ha ido mal.'
			})
	})
}
