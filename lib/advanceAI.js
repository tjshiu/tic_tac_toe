const Cloner = require("cloner");
const Maxby = require("lodash.maxby");
const Minby = require("lodash.minby");

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
                let player = mark === "X" ? "O" : "X";
                const value = minimax(boardCopy, depth + 1, player)
                values.push({
                    cost: value, 
                    pos: pos
                });
            }
        }

        if (mark === "O") {
            const max = Maxby(values, (v) => {
                return v.cost;
            });
            if (depth === 0) {
                return max.pos;
            } else {
                return max.cost;
            }
        } else {
            const min = Minby(values, (v) => {
                return v.cost;
            })
            if (depth === 0) {
                return min.pos;
            } else {
                return min.cost;
            }
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
        this.firstMove = true;
    }

    includes(list, pos) {
        for (let i = 0; i < list.length; i++) {
            let spot = list[i];
            if (spot[0] === pos[0] && spot[1] === pos[1]) {
                return true;
            }
        }
        return false;
    }

    
    firstMoveHelper(game) {
        this.firstMove = false;
        let board = game.board; 
        let diagonals = [[0, 0], [0, 2], [2, 0], [2, 2]];
        let center = [1, 1]
        let pos; 
        
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (!board.isEmptyPos([i, j])) pos = [i, j]

            }
        }
        
        let ran = Math.floor (Math.random() * 4);
        console.log(ran);
        if (this.includes(diagonals, pos)) {
            return center;
        } else {
            return diagonals[ran];
        }
    }

    move(game, mark) {
        let board = game.board
        if (this.firstMove) return this.firstMoveHelper(game);
        return minimax(board, 0, mark)
    }
}

module.exports = AdvancedPlayer;