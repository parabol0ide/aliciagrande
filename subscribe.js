{
	const scriptURL =
		'https://script.google.com/macros/s/AKfycbykyfXK9Wjj4V4lyCeGon9pBAerQWTdronCkCfK2CqfQFllWejG5_jvjgEYOiLXmnDe4A/exec'
	const form = document.getElementById('subscribe-form')
	const result = document.getElementById('subscribe-result')

	form.addEventListener('submit', function (e) {
		e.preventDefault()
		const formData = new FormData(form)
		result.innerHTML = 'Procesando...'
		fetch(scriptURL, { method: 'POST', body: formData })
			.then(async (response) => {
				let json = await response.json()
				if (response.status == 200) {
					form.reset()
					result.innerHTML = 'Gracias <3'
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
