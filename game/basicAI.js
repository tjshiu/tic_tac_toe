const Cloner = require("cloner");

class ComputerPlayer {
    constructor(name = "Computer") {
        this.name = name
    }

    move(game, mark) {
        winningMove(game, mark) || random_move(game)
    }

    winningMove(game, mark) {
        for (let i = 0; i <= 2; i++) {
            for (let j = 0; j <=2; j++) {
                let board_double = Cloner.deep.copy(game.board)
                pos = [i, j];

                if ()
            }
        }
    }


}