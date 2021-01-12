const logo = document.querySelector('.logoPng');
const logoDiv = document.querySelector('.logoDiv')
const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
logoDiv.classList.add('active')
navbar.classList.add('visible')
})

logo.addEventListener('click', () => {
    logoDiv.classList.toggle('active')
    })