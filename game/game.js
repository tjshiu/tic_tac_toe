const Board = require("./board");

class Game {
  constructor(player1, player2) {
    this.board = new Board();
    this.currentPlayer = Board.marks[0];
    this.players = {"X": player1, "O": player2}
    console.log(this.board.grid);
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
    return this.board.winner();
  }
}

module.exports = Game;
