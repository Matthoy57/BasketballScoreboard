let hostNum = 0
let guestNum = 0
let hostScore = document.getElementById("host-score")
let guestScore = document.getElementById("guest-score")

function addOneHost() {
    hostNum++
    hostScore.textContent = hostNum
}

function addTwoHost() {
    hostNum += 2
    hostScore.textContent = hostNum
}

function addThreeHost() {
    hostNum += 3
    hostScore.textContent = hostNum
}

function addOneGuest() {
    guestNum++
    guestScore.textContent = guestNum
}

function addTwoGuest() {
    guestNum += 2
    guestScore.textContent = guestNum
}

function addThreeGuest() {
    guestNum += 3
    guestScore.textContent = guestNum
}