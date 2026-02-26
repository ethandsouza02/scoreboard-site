let homeScore = document.getElementById("home-score-board")
console.log(homeScore)
let guestScore = document.getElementById("guest-score-board")
let homeCounter = 0
let guestCounter = 0

function homeScoreplus1(){
    homeCounter += 1
    homeScore.textContent = homeCounter     
}

function homeScoreplus2(){
    homeCounter += 2
    homeScore.textContent = homeCounter
    
}

function homeScoreplus3(){
    homeCounter += 3
    homeScore.textContent = homeCounter
    
}

function guestScoreplus1(){
    guestCounter += 1
    guestScore.textContent = guestCounter     
}

function guestScoreplus2(){
    guestCounter += 2
    guestScore.textContent = guestCounter
    
}

function guestScoreplus3(){
    guestCounter += 3
    guestScore.textContent = guestCounter
    
}