        // PSYCHIC GAME VARIABLES
        var letterArray = ['a', 'b', 'c', 'd', 'e',
            'f', 'g', 'h', 'i', 'j',
            'k', 'l', 'm', 'n', 'o',
            'p', 'q', 'r', 's', 't',
            'u', 'v', 'w', 'x', 'y', 'z'
        ];

        var winCount = 0;
        var lossCount = 0;
        var maxGuesses = 9;
        var guessesLeft = maxGuesses;
        var guessesSoFar = "";
        var randomLetter = "";
        var userGuess = "";

        // GAME FUNCTIONS

        // Function to get random letter.
        function getRandomLetter() {
            randomLetter = letterArray[(Math.random() * letterArray.length) | 0];
            console.log("Random Letter: " + randomLetter);
            alert("Random Letter: " + randomLetter);
        }

        // Function to reset the game.
        function resetGame() {
            guessesLeft = maxGuesses;
            guessesSoFar = "";
            getRandomLetter();
            document.querySelector("#winsText").innerHTML = "Wins: " + winCount;
            document.querySelector("#lossesText").innerHTML = "Losses: " + lossCount;
            document.querySelector("#guessesLeftText").innerHTML = "Guesses Left: " + guessesLeft;
            document.querySelector("#guessesSoFarText").innerHTML = "Your Guesses so far: ";
            alert("Game has been reset!");
        }

        // Function to render letter guesses.
        function renderGuess() {

            // If there the user guesses the right
            if (userGuess == randomLetter) {
                // Increment win total
                winCount++;
                // Reset the game
                alert("You win!")
                resetGame();
            } else {
                alert("Guessed Wrong!");
                // If there the user guesses wrong on the last guess
                if (guessesLeft == 1) {
                    // Increment loss total
                    lossCount++;
                    // Reset the game
                    alert("You lose!")
                    resetGame();
                } else if (guessesLeft == maxGuesses) {
                    // Initialize guesses SoFar to the guessed letter
                    guessesSoFar = userGuess;
                    // Output guesses so far to screen
                    document.querySelector("#guessesSoFarText").innerHTML = "Your Guesses so far: " + guessesSoFar;
                    // Decrement guesses left
                    guessesLeft--;
                     // Output guesses left to screen
                     document.querySelector("#guessesLeftText").innerHTML = "GuessesLeft: " + guessesLeft;
                    alert("Guesses Left After Wrong First Time: " + guessesLeft);
                } else if (guessesLeft < maxGuesses && guessesLeft > 0) {
                    // Add wrong letter to guesses so far with comma
                    guessesSoFar = guessesSoFar + ", " + userGuess;
                    // Output guesses so far to screen
                    document.querySelector("#guessesSoFarText").innerHTML = "Your Guesses so far: " + guessesSoFar;
                    // Decrement guesses left
                    guessesLeft--;
                     // Output guesses left to screen
                     document.querySelector("#guessesLeftText").innerHTML = "Guesses Left: " + guessesLeft;
                    alert("Guesses Left After Wrong Subsequent Time: " + guessesLeft);
                }
            }
        }


        // QUIZ MAIN PROCESS
        // ==============================================================================

        // Calling functions to start the game.
        resetGame();


        // When the user presses a key, it will run the following function...
        document.onkeyup = function (event) {

            // Determine which key was pressed, make it lowercase, and set it to the userGuess variable.
            userGuess = event.key.toLowerCase();
            alert("Your guess is: " + (userGuess));
            // Process the input userGuess
            renderGuess();
        };