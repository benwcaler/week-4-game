$(document).ready(function () {
    var randomNum = 0;
    var gem1 = 0;
    var gem2 = 0;
    var gem3 = 0;
    var gem4 = 0;
    var score = 0;
    var wins = 0;
    var losses = 0;

    function start() {
        score = 0;
        randomNum = Math.floor(Math.random() * 102) + 19;
        $("#rN").text(randomNum);
        $("#score").text(score);
        $("#wins").text(wins);
        $("#losses").text(losses);
        gem1 = Math.floor(Math.random() * 12) + 1;
        gem2 = Math.floor(Math.random() * 12) + 1;
        gem3 = Math.floor(Math.random() * 12) + 1;
        gem4 = Math.floor(Math.random() * 12) + 1;
    }

    $(".gem").on("click", function () {
        if ($(this).attr("id") === "g1") {
            score = score + gem1;
            $("#score").text(score);
        } else if ($(this).attr("id") === "g2") {
            score = score + gem2;
            $("#score").text(score);
        } else if ($(this).attr("id") === "g3") {
            score = score + gem3;
            $("#score").text(score);
        } else if ($(this).attr("id") === "g4") {
            score = score + gem4;
            $("#score").text(score);
        }
    })

    $(".gem").on("click", function () {
        if (score === randomNum) {
            wins++;
            $("#wins").text(wins);
            $("#rN").text(randomNum + "You win!!");
            setTimeout(function () { start() }, 1000);
        } else if (score > randomNum) {
            losses++;
            $("#losses").text(losses);
            $("#rN").text(randomNum + "You lose!!");
            setTimeout(function () { start() }, 1000);
        }
    });

    start()
})