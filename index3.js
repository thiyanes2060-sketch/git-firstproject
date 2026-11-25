let num1=12
let num2=5

let res=document.getElementById("team1")
let res1=document.getElementById("team2")

res.textContent=num1
res1.textContent=num2


function b1(){
    num1+=1
    res.textContent=num1
}

function b2(){
    num1+=2
    res.textContent=num1
}

function b3(){
    num1+=3
    res.textContent=num1
}

function g1(){
    num2+=1
    res1.textContent=num2
}

function g2(){
    num2+=2
    res1.textContent=num2
}

function g3(){
    num2+=3
    res1.textContent=num2
}


/* let homeScore = 12
let guestScore = 5

const homeEl = document.getElementById("team1")
const guestEl = document.getElementById("team2")

homeEl.textContent = homeScore
guestEl.textContent = guestScore

function addHome(points){
    homeScore += points
    homeEl.textContent = homeScore
}

function addGuest(points){
    guestScore += points
    guestEl.textContent = guestScore
}
 */