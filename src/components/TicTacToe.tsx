import { useState } from 'react';
import { Link } from 'react-router-dom';

enum Player {
  None = 0,
  X = 1,
  O = 2
}

const TicTacToe = () => {
  const [board, setBoard] = useState<Player[][]>([
    [Player.None, Player.None, Player.None],
    [Player.None, Player.None, Player.None],
    [Player.None, Player.None, Player.None]
  ]);
  const [currentPlayer, setCurrentPlayer] = useState<Player>(Player.X);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [winner, setWinner] = useState<Player | null>(null);

  const playMove = (row: number, col: number) => {
    if (gameOver || board[row][col] !== Player.None) {
      return;
    }

    const newBoard = board.map((r, rowIndex) =>
      r.map((cell, colIndex) => (rowIndex === row && colIndex === col ? currentPlayer : cell))
    );

    setBoard(newBoard);

    if (checkWin(newBoard, currentPlayer)) {
      setGameOver(true);
      setWinner(currentPlayer);
    } else if (checkDraw(newBoard)) {
      setGameOver(true);
      setWinner(Player.None);
    } else {
      setCurrentPlayer(currentPlayer === Player.X ? Player.O : Player.X);
    }
  };

  const checkWin = (board: Player[][], player: Player): boolean => {
    // Check rows
    for (let row = 0; row < 3; row++) {
      if (board[row][0] === player && board[row][1] === player && board[row][2] === player) {
        return true;
      }
    }

    // Check columns
    for (let col = 0; col < 3; col++) {
      if (board[0][col] === player && board[1][col] === player && board[2][col] === player) {
        return true;
      }
    }

    // Check diagonals
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
      return true;
    }
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
      return true;
    }

    return false;
  };

  const checkDraw = (board: Player[][]): boolean => {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (board[row][col] === Player.None) {
          return false;
        }
      }
    }
    return true;
  };

  const resetGame = () => {
    setBoard([
      [Player.None, Player.None, Player.None],
      [Player.None, Player.None, Player.None],
      [Player.None, Player.None, Player.None]
    ]);
    setCurrentPlayer(Player.X);
    setGameOver(false);
    setWinner(null);
  };

  return (
    <div className="tic-tac-toe">
      <h1>Tic-Tac-Toe</h1>
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${cell === Player.X ? 'x' : cell === Player.O ? 'o' : ''}`}
                onClick={() => playMove(rowIndex, colIndex)}
              >
                {cell === Player.X ? 'X' : cell === Player.O ? 'O' : ''}
              </div>
            ))}
          </div>
        ))}
      </div>
      {gameOver && (
        <div className="game-over">
          <p>
            {winner === Player.None ? 'It\'s a draw!' : `Player ${winner === Player.X ? 'X' : 'O'} wins!`}
          </p>
          <button onClick={resetGame}>
            Play Again
          </button>
        </div>
      )}
      <Link to="/" className="exit-button">
        Exit
      </Link>
    </div>
  );
};

export default TicTacToe;