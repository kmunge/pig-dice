//BUSINESS LOGIC
function Player(name, score1, score2, score3) {
    this.playerName = name;
    this.dieScore = score1;
    this.turnScore = score2;
    this.totalScore = score3;
  }
  
    var dieScore1 = 0;
    var turnScore1 = 0;
    var totalScore1 = 0;
  
    var dieScore2 = 0;
    var turnScore2 = 0;
    var totalScore2 = 0;
  
  function rollDice(){
    return (Math.floor(Math.random()*6)+1);
  };
  
  function score1 (ans) {
      if (ans === 1) {
        $("#comment") .text("Oh no! You just rolled a 1, Your total turnscore goes back to zero!");
        $(document.getElementById("roll1").disabled = true);
        $(document.getElementById("roll2").disabled = false);
        $(document.getElementById("Hold2").disabled = false);
        turnScore1= turnScore1*0;
        $("#turnScore1").empty();
  
      }
      else {
        $("#comment") .text("You rolled " + ans + ". Play again or hold!");
      }
    };
  
  function score2 (ans2) {
      if (ans2 === 1) {
        $("#comment2") .text("Oh no! You just rolled a 1, Your total score goes back to zero!");
        $(document.getElementById("roll2").disabled = true);
        $(document.getElementById("roll1").disabled = false);
        $(document.getElementById("Hold1").disabled = false);
        $("#turnScore2").empty();
          turnScore2= turnScore2*0;
        $("#turnScore2").empty();
      }
      else {
        $("#comment2") .text("You rolled " + ans2 + ". Play again or hold!");
      }
      };
  
  //USER INTERFACE (FRONT-END);
  $(document).ready(function(){
    $("form#players").submit(function(event){
      event.preventDefault();
      $("#gamebody").slideDown();
      var player1Name = $("input#player1").val();
      var player2Name = $("input#player2").val();
      $("#first").text("Hello "+ player1Name);
      $("#second").text("Hello "+ player2Name);
    });
  
    $("#roll1").click(function() {
      dieScore1= rollDice();
      turnScore1 += dieScore1;
      $("#dieScore1").text(dieScore1);
      $("#turnScore1").text(turnScore1);
      score1(dieScore1);
    });
  
    $("#roll2").click(function(){
      dieScore2 = rollDice();
      turnScore2 += dieScore2;
      $("#dieScore2").text(dieScore2);
      $("#turnScore2").text(turnScore2);
      score2(dieScore2)
  });
  
    $("#reset").click(function(){
      $(document.getElementById("Hold1").disabled = false);
      $(document.getElementById("roll1").disabled = false);
      $(document.getElementById("Hold2").disabled = false);
      $(document.getElementById("roll2").disabled = false);
      turnScore1= turnScore1*0;
      turnScore2= turnScore2*0;
      totalScore1= totalScore1*0;
      totalScore2= totalScore2*0;
      $("#dieScore1").empty();
      $("#dieScore2").empty();
      $("#comment").empty();
      $("#comment2").empty();
      $("#turnScore1").empty();
      $("#turnScore2").empty();
      $("#totalScore1").empty();
      $("#totalScore2").empty();
      $("#congrats").fadeOut();
      $("#glowing").fadeIn();
    });
  
    $("#Hold1").click(function(){
      $(document.getElementById("Hold1").disabled = true);
      $(document.getElementById("roll1").disabled = true);
      $(document.getElementById("Hold2").disabled = false);
      $(document.getElementById("roll2").disabled = false);
      totalScore1 += turnScore1;
      turnScore1 -= turnScore1;
      $("#totalScore1").text(totalScore1);
  
      if (totalScore1 >= 100) {
        $("#congrats").fadeIn();
        $("#glowing").fadeOut();
        $(document.getElementById("Hold2").disabled = true);
        $(document.getElementById("roll2").disabled = true);
        $(document.getElementById("Hold1").disabled = true);
        $(document.getElementById("roll1").disabled = true);
      }
    });
  
    $("#Hold2").click(function(){
      $(document.getElementById("Hold2").disabled = true);
      $(document.getElementById("roll2").disabled = true);
      $(document.getElementById("Hold1").disabled = false);
      $(document.getElementById("roll1").disabled = false);
      totalScore2 += turnScore2;
      turnScore2 -= turnScore2;
      $("#totalScore2").text(totalScore2);
  
      if (totalScore2 >= 100) {
        $("#congrats").fadeIn();
        $("#glowing").fadeOut();
        $(document.getElementById("Hold2").disabled = true);
        $(document.getElementById("roll2").disabled = true);
        $(document.getElementById("Hold1").disabled = true);
        $(document.getElementById("roll1").disabled = true);
      }
    });
  });
//copyrighted by @ kmunge
