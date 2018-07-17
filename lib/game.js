const Board = require("./board");

class Game {
  constructor(player1, player2, hasComputer = false) {
    this.board = new Board();
    this.currentPlayer = Board.marks[0];
    this.players = {"X": player1, "O": player2}
    this.computer = hasComputer; //If there is a computer player or not
  }

  ComputerPlayTurn() {
    while (true) {
      let current_player = this.players[this.currentPlayer];
      let pos = current_player.move(this, this.currentPlayer)

      if (this.playMove(pos)) break;
    }
  }

  isOver() {
    return this.board.isOver();
  }

  playMove(pos) {
    let marked = this.board.placeMark(pos, this.currentPlayer);
    if (marked) {
      this.swapTurn();
      return true;
    }
    return false;
  }

  swapTurn() {
    if (this.currentPlayer === Board.marks[0]) {
      this.currentPlayer = Board.marks[1];
    } else {
      this.currentPlayer = Board.marks[0];
    }
  }

  winner() {
    let winnerSymbol = this.board.winner()
    let winner = this.players[winnerSymbol]
    if (winner === undefined) return null;
    return winner.name;
  }
}

module.exports = Game;
