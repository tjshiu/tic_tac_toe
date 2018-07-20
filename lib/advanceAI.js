
const Cloner = require("cloner");

function minimax(board, depth, player) {
    const gameState = board.isOver();
    const winner = board.winner();

    if (gameState === false) {
        const values = [];

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                gridCopy = Cloner.deep.copy(game.board)
            }
        }
    } else if (winner === null) {
        return 0; 
    } else if (winner === player_token) {
        return depth - 10;
    } else if (winner === computer_token) {
        return 10 - depth;
    }
}

class AdvancedPlayer {
    constructor(name = "Computer") {
        this.name = name;
    }

    move(game, mark) {
        let board = game.board
        return minimax(board, 0, mark)
    }
}

module.exports = AdvancedPlayer;