    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <<script>
      var wins = 0, ties = 0, losses = 0;
      // variable names to make the associative array cleaner
      var r = "r", p = "p", s = "s";
      // All the game logic in one associative array
      var rpc = {r:{r:0, p:-1, s:1}, p:{r:1, p:0, s:-1}, s:{r:-1, p:1, s:0}};
      var computerChoices = [r, p, s];
      var humanImages = {r: "rock.png", p: "paper.jpg", s: "scissors.png"};
      var computerImages = {r: "therock.jpg", p: "origami.jpg", s: "scissorhands.jpg"};
      var resultMessage = ["Lose", "Tie", "Win"];
      
      document.getElementById("humanChoice").addEventListener("click", function(event){
        console.log(event.target.nodeName);
        if (event.target.nodeName == "BUTTON") { // only react to button clicks
          humanChoice = event.target.id;
          computerChoice =  computerChoices[Math.floor(Math.random() * computerChoices.length)]
          result = rpc[humanChoice][computerChoice];
          document.getElementById("human").src = "images/" + humanImages[humanChoice];
          document.getElementById("computer").src = "images/" + computerImages[computerChoice];
          wins += result == 1;
          ties += result == 0;
          losses += result == -1;
          document.getElementById("wins").innerHTML = wins;
          document.getElementById("ties").innerHTML = ties;
          document.getElementById("losses").innerHTML = losses;
          document.getElementById("message").innerHTML = "You " + resultMessage[result + 1];
          document.getElementById("humanChoice").classList.add("hide");
          document.getElementById("playAgain").classList.remove("hide");
        }
        event.stopPropagation();
      });
      document.getElementById("playAgain").addEventListener("click", function(event){
        // Reset the game
        document.getElementById("human").src = "images/RockPaperScissors.gif";
        document.getElementById("computer").src = "images/RockPaperScissors.gif";
        document.getElementById("humanChoice").classList.remove("hide");
        document.getElementById("playAgain").classList.add("hide");
      });
      // hide this div when the page loads -- but AFTER added the "click" event listener
      document.getElementById("playAgain").classList.add("hide");
