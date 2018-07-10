import React from "react";
import ReactDOM from "react-dom";
import GameBoard from "./GameBoard";
import Game from "./../game/game";

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.startGame = this.startGame.bind(this);
        let game = new Game();
        let board = game.board;

        this.state = {'game': game, 'board': board}
        this.updateBoard = this.updateBoard.bind(this);
    }

    startGame(e) {
        e.preventDefault();
        let game = new Game();
        let board = game.board
        this.setState({'game': game, 'board': board})
    }

    updateBoard() {
        this.setState({'board': this.state.game.board})
    }

    render() {
        return (
            <div>
                <h1>Tic Tac Toe</h1>
                <button onClick={this.startGame}> New Game</button>
                <GameBoard game={this.state.game} board={this.state.board} update={this.updateBoard} />
            </div>
        );
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Root />, document.getElementById("root"));
})