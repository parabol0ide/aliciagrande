function highlight_tab() {
	let sections = document.querySelectorAll('section')
	let navLinks = document.querySelectorAll('.tab')

	sections.forEach((section) => {
		let top = window.scrollY
		let offset = section.offsetTop - 150
		let height = section.offsetHeight
		let id = section.getAttribute('id')
		if (top >= offset && top < offset + height) {
			navLinks.forEach((links) => {
				links.classList.remove('selected')
				document
					.querySelector('.tab[href*=' + id + ']')
					.classList.add('selected')
			})
		}
	})
}

window.onload = () => {
	highlight_tab()
}

window.onscroll = () => {
	highlight_tab()
}
