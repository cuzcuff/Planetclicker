
var cursor_EL = document.getElementById("cursor")
var cursorcost_EL = document.getElementById("cursorcost")
var cursors_EL = document.getElementById("cursors")

var clicker_EL = document.getElementById("clicker")
var clickingpowercost_EL = document.getElementById("clickingpowercost")
var clickers_EL = document.getElementById("clickers")

var score_EL = document.getElementById("score")

var mars_EL = document.getElementById("mars1")
var marscost_EL = document.getElementById("marscost")
var marss_EL = document.getElementById("marss")

var scorepersecond_EL = document.getElementById("scorepersecond")

var jupiter_EL = document.getElementById("jupiter1")
var jupitercost_EL = document.getElementById("jupitercost")
var jupiters_EL = document.getElementById("jupiters")

var saturn_EL = document.getElementById("saturn1")
var saturncost_EL = document.getElementById("saturncost")
var saturns_EL = document.getElementById("saturns")

var uranus_EL = document.getElementById("uranus1")
var uranuscost_EL = document.getElementById("uranuscost")
var uranuss_EL = document.getElementById("uranuss")

var scorePerSecond = 0; 
var score = 0;
var cursorCost = 50;
var cursors = 0;
var clickingPower = 10000;
var clickingpowerCost = 150;
var clickers = 0;
var marsCost = 1000;
var mars = 0;
var marss = 0;
var jupiterCost = 7500;
var jupiter = 0;
var jupiters = 0;
var mars_bought = false;
var jupiter_bought = false;
var saturn_bought = false;
var saturnCost = 20000;
var saturn = 0;
var saturns = 0;
var uranusCost = 50000;
var uranus = 0;
var uranuss = 0;

var boost = 0;


function buyCursor() {
    if (score >= cursorCost) {
        score = score - cursorCost;
        cursors = cursors + 1;
        cursorCost = Math.round(cursorCost* 1.40);

        score_EL.innerHTML = score;
        cursorcost_EL.innerHTML = cursorCost;
        cursors_EL.innerHTML = cursors;
        updateScorePerSecond();
    }
}

function buyClicker() {
    if (score >= clickingpowerCost) {
    score = score - clickingpowerCost;
    clickers = clickers + 1;
    clickingpowerCost = Math.round(clickingpowerCost * 1.50);
    clickingPower = Math.round(clickingPower * 1.50);

    score_EL.innerHTML = score;
    clickingpowercost_EL.innerHTML = clickingpowerCost;
    clickers_EL.innerHTML = clickers;
    }
}


function buyMars() {
    if (score >= marsCost) {
        score = score - marsCost;
        marss = marss + 1;
        marsCost = Math.round(marsCost* 1.40);
        document.getElementById("planet").src = "mars.png"
        mars1.style.display = 'none'
        mars_bought = true;

        score_EL.innerHTML = score;
        marscost_EL.innerHTML = marsCost;
        marss_EL.innerHTML = marss;
        updateScorePerSecond();
    }
}

function buyJupiter() {
    if (score >= jupiterCost && mars_bought == true) {
        score = score - jupiterCost;
        jupiters = jupiters + 1;
        jupiterCost = Math.round(jupiterCost* 1.40);
        document.getElementById("planet").src = "jupiter.png"
        jupiter1.style.display = 'none'
        jupiter_bought = true;

        score_EL.innerHTML = score;
        jupitercost_EL.innerHTML = jupiterCost;
        jupiters_EL.innerHTML = jupiters;
        updateScorePerSecond();
    }
}

function buySaturn() {
    if (score >= saturnCost && jupiter_bought == true) {
        score = score - saturnCost;
        saturns = saturns + 1;
        saturnCost = Math.round(saturnCost* 1.40);
        document.getElementById("planet").src = "saturn.png"
        saturn1.style.display = 'none'
        saturn_bought = true;

        score_EL.innerHTML = score;
        saturncost_EL.innerHTML = saturnCost;
        saturns_EL.innerHTML = saturns;
        updateScorePerSecond();
    }
}

function buyUranus() {
    if (score >= uranusCost && saturn_bought == true) {
        score = score - uranusCost;
        uranuss = uranuss + 1;
        uranusCost = Math.round(uranusCost* 1.40);
        document.getElementById("planet").src = "uranus.png"
        uranus1.style.display = 'none'

        score_EL.innerHTML = score;
        uranuscost_EL.innerHTML = uranusCost;
        uranuss_EL.innerHTML = uranuss;
        updateScorePerSecond();
    }
}


function Boost() {

}






function addToScore(amount) {
    score = score + amount;
    score_EL.innerHTML = score;
}

function updateScorePerSecond() {
    scorePerSecond = cursors + marss * 5 + jupiters * 70 + saturns * 150 + uranuss * 500;
    scorepersecond_EL.innerHTML = scorePerSecond;
    console.log("Score per sec: "+scorePerSecond);
}

cursor_EL.addEventListener("click", buyCursor)
clicker_EL.addEventListener("click", buyClicker)
mars_EL.addEventListener("click", buyMars)
jupiter_EL.addEventListener("click", buyJupiter)
saturn_EL.addEventListener("click", buySaturn)
uranus_EL.addEventListener("click", buyUranus)

setInterval(function() {
    //score = score + cursors;
    //score = score + marss * 19;
    //score = score + jupiters * 70;
    //score = score + saturns * 150;
    //score = score + uranuss * 350;

    score += scorePerSecond;
    score_EL.innerHTML = score;
    scorepersecond_EL.innerHTML = scorePerSecond;
}, 1000); //100ms = 1s
