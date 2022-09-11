const body = document.querySelector("body")
const btn = document.querySelector('.btn')
const icon = document.querySelector(".btn__icon")


function store(value) {
    localStorage.setItem('darkmode',value)
}


function load() {
    const darkmode = localStorage.getItem('darkmode')
    

    if (!darkmode) {
        store(false)
        icon.classList.add("bi-brightness-low-fill")
    } else if (darkmode == 'true') {
        body.classList.add('darkmode')
        icon.classList.add('bi-moon-fill')
    } else if (darkmode == 'false') {
        icon.classList.add("bi-brightness-low-fill")
    }
}
load()

btn.addEventListener('click', () => {
    body.classList.toggle('darkmode')
    icon.classList.add('animated')

    store(body.classList.contains('darkmode'))
    if (body.classList.contains('darkmode')) {
        icon.classList.remove('bi-brightness-low-fill')
        icon.classList.add('bi-moon-fill')
    } else {
        icon.classList.remove('bi-moon-fill')
        icon.classList.add('bi-brightness-low-fill')
    }
    setTimeout(() => {
        icon.classList.remove('animated')
    })
})