
const Cloner = require("cloner");

function minimax(board, depth, mark) {
    const gameState = board.isOver();
    const winner = board.winner();

    if (gameState === false) {
        const values = [];

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let boardCopy = Cloner.deep.copy(board);
                let pos = [i, j];

                if (!boardCopy.isEmptyPos(pos)) continue;
                boardCopy.placeMark(pos, mark);
                player = mark === "X" ? "O" : "X"
                const value = minimax(boardCopy, depth + 1, player)
                values.push({
                    cost: value, 
                    pos: pos
                });
            }
        }

        if (mark === "O") {
            const max = 
        }


    } else if (winner === null) {
        return 0; 
    } else if (winner === "X") { //human player
        return depth - 10;
    } else if (winner === "O") { //computr_player
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