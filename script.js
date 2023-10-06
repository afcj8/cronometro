const btnStart = document.querySelector('#btnStart')
const btnPause = document.querySelector('#btnPause')
const btnClean = document.querySelector('#btnClean')

var mil = 0
var seg = 0
var min = 0
var interval

btnStart.onclick = () => {
    btnStart.disabled = true
    btnPause.disabled = false

    interval = setInterval(() => {timer()}, 10);
}

btnPause.onclick = () => {
    btnStart.disabled = false
    btnPause.disabled = true

    clearInterval(interval)
}

btnClean.onclick = () => {
    btnStart.disabled = false
    btnPause.disabled = true

    clearInterval(interval)
    mil = 0
    seg = 0
    min = 0
    document.querySelector('span').innerText = '00:00.00'
}

function timer() {
    mil += 1

    if (mil == 100) {
        mil = 0
        seg += 1

        if (seg == 60) {
            seg = 0
            min += 1
        }
    }

    var format = (min < 10 ? '0' + min : min) + ':' + (seg < 10 ? '0' + seg : seg) + '.' + (mil < 10 ? '0' + mil : mil)
    document.querySelector('span').innerText = format

    return format
}