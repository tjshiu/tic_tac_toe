import React from "react";
import ReactDOM from "react-dom";
import GameBoard from "./GameBoard";
import Game from "./../game/game";
import Computer from "./../game/basicAI";

class Root extends React.Component {
    constructor(props) {
        super(props);
        let player1 = new Computer();
        let game = new Game(null, player1);
        let board = game.board;
        let over = game.isOver();
        let winner = game.winner();
        this.state = {game, board, over, winner}
        this.restartGame = this.restartGame.bind(this);
        this.updateBoard = this.updateBoard.bind(this);
        this.start = this.start.bind(this);
    }

    restartGame(e) {
        e.preventDefault();
        let game = new Game();
        let board = game.board
        let over = game.isOver();
        let winner = game.winner();
        this.setState({game, board, over, winner})
    }
    
    start(e) {
        e.preventDefault();
        this.state.game.run();
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
                <button onClick={this.restartGame}> New Game</button>
                <button onClick={this.start}> Start</button>
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