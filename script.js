var score = 0;
var clickerCost = 15;
var clickers = 0;
var clickingPower = 1;

function buyClicker() {
    if (score >= clickerCost) {
        score = score - clickerCost;
        clickers = clickers + 1;
        clickerCost = Math.round(clickerCost* 1.15);

        document.getElementById("score").innerHTML = score;
        document.getElementById("clickercost").innerHTML = clickerCost;
        document.getElementById("clickers").innerHTML = clickers;
    }
}

function addToScore(amount) {
    score = score + amount;
    document.getElementById("score").innerHTML = score;
}


setInterval(function() {
    score = score + clickers;
    document.getElementById("score").innerHTML = score;
}, 1000); //100ms = 1s
