const hamburgButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
	navList.classList.toggle('show')
}

hamburgButton.addEventListener('click', toggleButton)