const Cloner = require("cloner");

class ComputerPlayer {
    constructor(name = "Computer") {
        this.name = name
    }

    move(game, mark) {
        return this.winningMove(game, mark) || this.randomMove(game)
    }

    winningMove(game, mark) {
        for (let i = 0; i <= 2; i++) {
            for (let j = 0; j <= 2; j++) {
                let board_double = Cloner.deep.copy(game.board);
                let pos = [i, j];

                if (!board_double.isEmptyPos(pos)) continue;
                board_double.placeMark(pos, mark);

                if (board_double.winner() === mark) return pos;
            }
        }
        return null;
    }

    randomMove(game){
        let board = game.board

        while (true) {
            let pos1 = Math.floor (Math.random() * 3);
            let pos2 = Math.floor (Math.random() * 3);
            let pos = [pos1, pos2];

            if (board.isEmptyPos(pos)) return pos;
        }
    }

}

module.exports = ComputerPlayer;