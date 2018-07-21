import React from "react";
import ReactDOM from "react-dom";
// import GameBoard from "./GameBoard";
// import Game from "./../lib/game";
// import BasicComputer from "./../lib/basicAI";
// import AdvanceComputer from "./../lib/advanceAI";
// import HumanPlayer from "./../lib/humanPlayer";

class Root extends React.Component {
    render() {
        return (
            <div>SORRY, site is temporarily down for testing purposes. 
            
            /**Testing--> */

            </div>

            
        )
    }
}

// class Root extends React.Component {
//     constructor(props) {
//         super(props);
//         let player1 = new BasicComputer();
//         let player2 = new HumanPlayer();
//         let game = new Game(player2, player1, true, "BC");
//         let board = game.board;
//         let over = game.isOver();
//         let winner = game.winner();
//         let type = game.type
//         this.state = {game, board, over, winner, type}
//         this.updateBoard = this.updateBoard.bind(this);
//         this.newGame = this.newGame.bind(this);
//         this.basicComp = this.basicComp.bind(this);
//         this.advanceComp = this.advanceComp.bind(this);
//         this.human = this.human.bind(this);
//     }

//     newGame(player1, player2, hasComputer, type) {
//         let game = new Game(player1, player2, hasComputer, type);
//         let board = game.board
//         let over = game.isOver();
//         let winner = game.winner();
//         this.setState({game, board, over, winner, type})
//     }

//     advanceComp(e) {
//         e.preventDefault();
//         let player1 = new HumanPlayer();
//         let player2 = new AdvanceComputer();
//         this.newGame(player1, player2, true, "AC");
//     }

//     basicComp(e) {
//         e.preventDefault();
//         let player1 = new HumanPlayer();
//         let player2 = new BasicComputer();
//         this.newGame(player1, player2, true, "BC");
//     }
    
//     human(e) {
//         e.preventDefault();
//         let player1 = new HumanPlayer("Player 1");
//         let player2 = new HumanPlayer("Player 2");
//         this.newGame(player1, player2, false, "PP");
//     }

//     updateBoard() {
//         let game = this.state.game
//         let board = game.board;
//         let over = game.isOver();
//         let winner = game.winner();
//         this.setState({board, over, winner})
//     }

//     render() {
//         return (
//             <div className="ttt-container">
//                 <div className="buttons">
//                     <button 
//                         className = {this.state.type === "AC" ? "active" : ""}
//                         onClick={this.advanceComp}>
//                         Player <div /> vs <div /> Advance Computer
//                     </button>
//                     <button 
//                         className = {this.state.type === "BC" ? "active" : ""}
//                         onClick={this.basicComp}>
//                         Player <div /> vs <div /> Basic Computer
//                     </button>
//                     <button 
//                         className = {this.state.type === "PP" ? "active" : ""}
//                         onClick={this.human}>
//                         Player 1 <div /> vs <div/> Player 2
//                     </button>
//                 </div>
                
//                 <GameBoard 
//                     game={this.state.game} 
//                     board={this.state.board} 
//                     update={this.updateBoard} 
//                     over={this.state.over}
//                 />
//                 {this.state.over === false ? null : (
//                     this.state.winner === null ? <h2>Game Over</h2> :(
//                         <h2>{`${this.state.winner} Won!`}</h2>
//                     )
//                 )}
//             </div>
//         );
//     }
// }

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Root />, document.getElementById("root"));
})
