function displayMessage(message) {
    const messageOverlay = document.getElementById('messageOverlay');
    messageOverlay.innerHTML = `<div class="message">${message}</div>`;
    messageOverlay.style.display = 'flex';
  }
const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    const index = parseInt(cell.id);
    if (gameBoard[index] === '' && !checkWinner()) {
      cell.innerText = currentPlayer;
      gameBoard[index] = currentPlayer;
      if (checkWinner()) {
        displayMessage(`${currentPlayer} wins!`);
      } else if (!gameBoard.includes('')) {
        displayMessage("It's a draw!");
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  });
});

function checkWinner() {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  return winConditions.some(condition => {
    const [a, b, c] = condition;
    return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
  });
}
