let money = 1000;
let currentGame = "-";
let lastGames = [];

function startGame() {
   
    let crashValue = Math.floor(Math.random() * 10) + 1;
    currentGame = `Crash at ${crashValue}x`;

 
    money *= crashValue;


    lastGames.unshift(currentGame);
    if (lastGames.length > 5) {
        lastGames.pop(); 
    }

    updateDisplay();
}

function updateDisplay() {
    document.getElementById('money').innerText = money;
    document.getElementById('currentGame').innerText = currentGame;
    document.getElementById('lastGames').innerText = lastGames.join(', ');
}