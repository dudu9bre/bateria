/*

function removeTransition(e) {
    if (e.propertyName !== "transform") return
    if (!{}[e.keyCode]) {
        e.target.classList.remove("playing")
    }
}
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if (!audio) return

    key.classList.add("playing")
    audio.currentTime = 0
    audio.play()

    audio.onended = function() {
        key.classList.remove("playing")
    }
}

const keys = Array.from(document.querySelectorAll(".key"))

keys.forEach(key => addEventListener("transitionend", removeTransition))
window.addEventListener("keydown", playSound)

*/

/*
function playSound(e) {
    const key = e.type === 'keydown' ? e.keyCode : e.target.getAttribute('data-key')
    const audio = document.querySelector(`audio[data-key="${key}"]`)
    const div = document.querySelector(`div[data-key="${key}"]`)
    if (!audio) return

    div.classList.add('playing')
    audio.currentTime = 0;
    audio.play()

    audio.onended = function() {
        div.classList.remove('playing')
    };
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return
    e.target.classList.remove('playing')
}

window.addEventListener('keydown', playSound)
Array.from(document.querySelectorAll('div[data-key]')).forEach(item => {
    item.addEventListener('touchstart', playSound)
    item.addEventListener('transitionend', removeTransition)
})
*/

function playSound(e) {
    const key = e.type === 'keydown' ? e.keyCode : e.target.closest('div').getAttribute('data-key')
    const audio = document.querySelector(`audio[data-key="${key}"]`)
    const div = document.querySelector(`div[data-key="${key}"]`)
    if (!audio) return

    div.classList.add('playing')
    audio.currentTime = 0
    audio.play()

    audio.onended = function() {
        div.classList.remove('playing')
    }
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return
    e.target.classList.remove('playing')
}

window.addEventListener('keydown', playSound)
Array.from(document.querySelectorAll('div[data-key]')).forEach(item => {
    item.addEventListener('touchstart', playSound)
    item.addEventListener('transitionend', removeTransition)
})