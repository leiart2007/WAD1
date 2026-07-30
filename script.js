let score = 0;

const scoreDisplay = document.getElementById('score-display');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');
const resetBtn = document.getElementById('reset-btn');

function updateDisplay() {
    scoreDisplay.textContent = score;

    if (score > 0) {
        scoreDisplay.style.color = "green";
    } else if (score < 0) {
        scoreDisplay.style.color = "red";
    } else {
        scoreDisplay.style.color = "black";
    }
}

increaseBtn.addEventListener('click', () => {
    score++;
    updateDisplay();
});

decreaseBtn.addEventListener('click', () => {
    score--;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    score = 0;
    updateDisplay();
});