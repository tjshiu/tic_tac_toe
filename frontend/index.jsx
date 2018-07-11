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
        let over = game.isOver();
        let winner = game.winner();
        this.state = {game, board, over, winner}
        this.updateBoard = this.updateBoard.bind(this);
    }

    startGame(e) {
        e.preventDefault();
        let game = new Game();
        let board = game.board
        let over = game.isOver();
        let winner = game.winner();
        this.setState({game, board, over, winner})
    }

    updateBoard() {
        let game = this.state.game
        let board = game.board;
        let over = game.isOver();
        let winner = game.winner();
        this.setState({board, over, winner})
    }

    render() {
        return (
            <div className="ttt-container">
                <h1>Tic Tac Toe</h1>
                <button onClick={this.startGame}> New Game</button>
                <GameBoard 
                    game={this.state.game} 
                    board={this.state.board} 
                    update={this.updateBoard} 
                    over={this.state.over}
                />
                {this.state.over === false ? null : (
                    this.state.winner === null ? <h2>Game Over</h2> :(
                        <h2>{`${this.state.winner} Wins!`}</h2>
                    )
                )}
            </div>
        );
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Root />, document.getElementById("root"));
})