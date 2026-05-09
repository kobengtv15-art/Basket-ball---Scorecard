

let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

let homecount = 12
let guestcount = 5

function homeAdd1() {
    homecount += 1
    homeEl.textContent = homecount
}

function homeAdd2() {
    homecount += 2
    homeEl.textContent = homecount
}

function homeAdd3() {
    homecount += 3
    homeEl.textContent = homecount
}

function guestAdd1() {
    guestcount += 1
    guestEl.textContent = guestcount
}

function guestAdd2() {
    guestcount += 2
    guestEl.textContent = guestcount
}

function guestAdd3() {
    guestcount += 3
    guestEl.textContent = guestcount
}

function newGame() {
    homecount = 0
    guestcount = 0
    homeEl.textContent=homecount
    guestEl.textContent=guestcount
}