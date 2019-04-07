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

