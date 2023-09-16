
const shows = document.querySelectorAll('#slider')
let count = 0


setInterval(() => {
    react()
}, 8000);

function react() {
    shows[1].style.opacity = '0'

    setTimeout(() => {
        shows[0].style.opacity = '0'
    }, 3000);
}




setInterval(() => {


    start()
}, 15000);

function start() {
    shows[1].style.opacity = '1'

    setTimeout(() => {
        shows[0].style.opacity = '1'
    }, 8000);

}

