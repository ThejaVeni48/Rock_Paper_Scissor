


var playerImages = ['rock.png', 'paper.png', 'scissors.png'];
var computerImages = ['rock.png', 'paper.png', 'scissors.png'];

var getPlayer = document.getElementById("player");
var getComputer = document.getElementById("computer");

var getRockBtn = document.getElementById("rockBtn");
var getPaperBtn = document.getElementById("paperBtn");
var getScissorBtn = document.getElementById("scissorBtn");

var playerChoice = null;

// Function to update computer's choice in the UI
function updateComputerChoice(choice) 
{
    var choiceName = choice.split('.')[0]; 
    document.getElementById('computerChoice').innerText = choiceName;
}


getRockBtn.addEventListener("click", function() {
    playerChoice = playerImages[0];
    getPlayer.setAttribute("src", playerImages[0]);
    evaluateResult();
});

getPaperBtn.addEventListener("click", function() {
    playerChoice = playerImages[1];
    getPlayer.setAttribute("src", playerImages[1]);
    evaluateResult();
});

getScissorBtn.addEventListener("click", function() {
    playerChoice = playerImages[2];
    getPlayer.setAttribute("src", playerImages[2]);
    evaluateResult();
});



function evaluateResult() {
    if (playerChoice !== null) {
        var index = Math.floor(Math.random() * computerImages.length);
        var computerChoice = computerImages[index];
        getComputer.setAttribute("src", computerChoice);
        updateComputerChoice(computerChoice); 

        // game logic 
        if (playerChoice === computerChoice) {
            console.log("It's a tie!");
            var getResult = document.getElementById("result");
            getResult.innerText = "Tie!"
            getResult.style.transition = "0.6s linear infinite";
        } else if (
            (playerChoice === playerImages[0] && computerChoice === computerImages[1]) ||
            (playerChoice === playerImages[1] && computerChoice === computerImages[2]) ||
            (playerChoice === playerImages[2] && computerChoice === computerImages[0])
        ) {
            console.log("Computer gets a point!");
            var getResult = document.getElementById("result");
            getResult.innerText = "Oops! You lost the match";
           
        } else {
            var getResult = document.getElementById("result");
            getResult.innerText = "Player Wins";
           

        //for next round reseting the playerChoice
        playerChoice = null;
    }
}
}
            var getReset = document.getElementById("reset");
            var getResult = document.getElementById("result");
            getReset.addEventListener("click", function ()
            {
                getResult.innerText="Choose an option"
            })
    

