import React from "react";
import ReactDOM from "react-dom";
import GameBoard from "./GameBoard";
import Game from "./../game/game";
import BasicComputer from "./../game/basicAI";
import HumanPlayer from "./../game/humanPlayer";

class Root extends React.Component {
    constructor(props) {
        super(props);
        let player1 = new BasicComputer();
        let player2 = new HumanPlayer();
        let game = new Game(player2, player1, true);
        let board = game.board;
        let over = game.isOver();
        let winner = game.winner();
        this.state = {game, board, over, winner}
        this.updateBoard = this.updateBoard.bind(this);
        this.newGame = this.newGame.bind(this);
        this.basicComp = this.basicComp.bind(this);
        this.human = this.human.bind(this);
    }

    newGame(player1, player2, hasComputer) {
        let game = new Game(player1, player2, hasComputer);
        let board = game.board
        let over = game.isOver();
        let winner = game.winner();
        this.setState({game, board, over, winner})
    }

    basicComp(e) {
        e.preventDefault();
        let player1 = new HumanPlayer();
        let player2 = new BasicComputer();
        this.newGame(player1, player2, true);
    }
    
    human(e) {
        e.preventDefault();
        let player1 = new HumanPlayer("Player 1");
        let player2 = new HumanPlayer("Player 2");
        this.newGame(player1, player2, false);
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
                <button onClick={this.basicComp}>Player vs Basic Computer</button>
                <button onClick={this.human}>Player 1 vs Player 2</button>
                <GameBoard 
                    game={this.state.game} 
                    board={this.state.board} 
                    update={this.updateBoard} 
                    over={this.state.over}
                />
                {this.state.over === false ? null : (
                    this.state.winner === null ? <h2>Game Over</h2> :(
                        <h2>{`${this.state.winner} Won!`}</h2>
                    )
                )}
            </div>
        );
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Root />, document.getElementById("root"));
})