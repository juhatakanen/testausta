const logo = document.querySelector('.logoPng');
const logoDiv = document.querySelector('.logoDiv')

window.addEventListener('scroll', () => {
logoDiv.classList.add('active')
})

logo.addEventListener('click', () => {
    logoDiv.classList.toggle('active')
    })