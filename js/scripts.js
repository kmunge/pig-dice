//Business logic
function Player(name,score1,score2,score3){
    this.playerName = name;
    this.dieScore = score1;
    this.turnScore = score2;
    this.totalScore = score3;
}

var dieScore1 = 0;
var turnScore1 =0;
var totalScore1 = 0;

var dieScore2 = 0;
var turnScore2 = 0;
var totalScore2 = 0;

function rollDice(){
    return(Math.floor(Math.random()*6)+1);
};

function score1 (ans){
    if(ans ===1 ){
        $("#comment").text("Oh no! You rolled 1, you just lost your turnscore,result zero!!");
        $(document.getElementById("roll1").disabled = true);
        $(document.getElementById("roll2").disabled = false);
        $(document.getElementById("Hold2").disabled = false);
        turnScore1 = turnScore1*0;
        $("#turnScore1").empty();
    }
    else{
        $("#comment").text("You rolled "+ ans +". Play again or hold!");
    }
};

function score2(ans2){
    if(ans2 === 1){
        $("#comment2").text("oh no! You rolled 1,lost your scores back to zero!");
        $(document.getElementById("roll2").disabled = true);
        $(document.getElementById("roll1").disabled = false);
        $(document.getElementById("Hold1").disabled = false);
        $("#turnScore2").empty();
    }
    else{
        $("#comment2").text("You rolled "+ ans2 + ". Play again or hold!");
    }
};

