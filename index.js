const secretNumber = Math.random() * 100 + 1;
const roundedSecretNmbr = Math.floor(secretNumber);
let attempts = 0;
const maxAttempts = 5;

const input = document.getElementById("guessInput");
const button = document.getElementById("guessBtn");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts")

function checkGuess() {
	const guess = Number(input.value);
    
    attempts++
    const attemptsLeft = maxAttempts - attempts

	if (!guess) {
		message.textContent = "Please enter a number!";
		return;
	}

    if (attempts >= maxAttempts) {
        message.textContent = `You have reached max attempts. Your attempts: ${attempts}`
        attemptsDisplay.textContent = "Attempts left: 0";
        return
    }
	if (guess === roundedSecretNmbr) {
		message.textContent = "Correct!";
        attemptsDisplay.textContent = `You used ${ attemptsLeft} attempts.`
        button.disabled = "true"
	} else if (guess > roundedSecretNmbr) {
		message.textContent = "Too high!";
		message.style.color = "red";
        attemptsDisplay.textContent = `Attempts left: ${attemptsLeft}.`
	} else {
		message.textContent = "Too Low!";
		message.style.color = "blue";
        attemptsDisplay.textContent = `Attempts left: ${attemptsLeft}.`
	}
}

button.addEventListener("click", checkGuess);

console.log(roundedSecretNmbr);
