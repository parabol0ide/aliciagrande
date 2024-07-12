{
	const links = document.querySelectorAll('.tab')
	const toggle = document.getElementById('nav-toggle')
	const body = document.body

	toggle.onclick = function () {
		body.classList.toggle('no-scroll')
	}

	links.forEach(
		(item) =>
			(item.onclick = function () {
				toggle.checked = false
				body.classList.toggle('no-scroll')
			})
	)
}
