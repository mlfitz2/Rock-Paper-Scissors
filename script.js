var wins = 0;
var losses = 0;
var ties = 0;

var options = ['R', 'P', 'S'];

function playGame() {
    var userChoice = window.prompt('Enter R, P, or S');
    userChoice = userChoice.toUpperCase();

    var i = Math.floor(Math.random() * options.length);
    var computerChoice = options[i];
    window.alert("The computer chose " + computerChoice + "!")

    if (computerChoice === userChoice) {
        window.alert("It's a tie!")
        ties++;
    } else if (
        (userChoice === 'R' && computerChoice === 'S') ||
        (userChoice === 'P' && computerChoice === 'R') ||
        (userChoice === 'S' && computerChoice === 'P')
    ) {
        window.alert("You win!")
        wins++;
    } else {
        window.alert("You lose!")
        losses++;
    }

    window.alert("Scoreboard:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties)

    var playAgain = window.confirm("One more round?");
    if (playAgain) {
        playGame()
    } 




}





playGame()