const gamebtn = $("#gameButton").hide();
const scoreDisplay = $("#score");
const timeDisplay = $("#time");

$("#play").click(function(){
    let score = 0;
    let time = 10;

    scoreDisplay.text(score);
    timeDisplay.text(time);

    moveButton();
    
    gamebtn.show();
    $("#play").hide();

    gamebtn.off("click").click(() => {
        score++;
        scoreDisplay.text(score);
        moveButton();
    });

    const timer = setInterval(function(){
        time--;
        timeDisplay.text(time);
        if(time === 0){
            clearInterval(timer);
            gamebtn.hide();
            $("h1").text(`Game Over. Your Scored ${score} points.`);
            $("#play").show();
        }
    }, 1000);
})

function moveButton() {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    
    gamebtn.css({
        left: `${x}px`,
        top: `${y}px`
    });
}