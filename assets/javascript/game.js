// at start of game generate a random number between 19-120 that will be used to determine if player wins or loses. 
// This random nuber will be displayed on screen.
var randomNumber =
  $(document).ready(function() {
    var random = Math.floor(Math.random() * 120) + 19;
    $("#startnumber").html(random);
  });

// each 'crystal button' will produce a random number for itself between 1-12 at start of each game.
// this random number between 1-12 will change at the start of each game.
// after each 'click' the value of the diamond will appear in the scorebox. 

// need to change this jQuery so that the assigned "crystal number" stays the same value for the entirety of the game
// Each time the player 'clicks' a crystal the value will be added to the previous number and the sum will be calculated in the scorebox.

$(document).ready(function() {
  $("#crystal-button1").on("click", function() {
    var random = Math.floor(Math.random() * 12) + 1;
    $("#count").html(random);

  });
});

$(document).ready(function() {
  $("#crystal-button2").on("click", function() {
    var random = Math.floor(Math.random() * 12) + 1;
    $("#count").html(random);
  });
});

$(document).ready(function() {
  $("#crystal-button3").on("click", function() {
    var random = Math.floor(Math.random() * 12) + 1;
    $("#count").html(random);

  });
});

$(document).ready(function() {
  $("#crystal-button4").on("click", function() {
    var random = Math.floor(Math.random() * 12) + 1;
    $("#count").html(random);
  });
});

// if players cumulative score matches random number, player wins game.
// if players cumulative score exceeds random number, player loses game.
// record game wins and losses on screen.