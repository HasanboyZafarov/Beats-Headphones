let header = document.querySelector('header')

window.addEventListener('scroll', function () {
    if (this.window.scrollY > 1) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
})