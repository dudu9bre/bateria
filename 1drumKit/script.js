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