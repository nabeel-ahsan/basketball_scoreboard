let scorecard1 = document.getElementById("scorecard1")
let scorecard2 = document.getElementById("scorecard2")
let reset_btn = document.getElementById("reset")
let winnerText = document.getElementById("winner")

let homePoints = 0;
let guestPoints = 0;

function increaseHome(points) {
    homePoints += points
    scorecard1.textContent = homePoints
    winnerFun()
}

function increaseGuest(points) {
    guestPoints += points
    scorecard2.textContent = guestPoints
    winnerFun()
}

function resetBtn() {
    homePoints = 0
    guestPoints = 0
    scorecard1.textContent = 0
    scorecard2.textContent = 0
    winnerText.textContent = ""
}

function winnerFun() {
    if (homePoints >= 15 && homePoints > guestPoints){
        winnerText.textContent = "HOME team is winner"
    }
    else if (guestPoints >= 15 && guestPoints > homePoints){
        winnerText.textContent = "GUEST team is winner"
    }
}