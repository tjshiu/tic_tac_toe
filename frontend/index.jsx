import React from "react";
import ReactDOM from "react-dom";
import GameBoard from "./gameBoard";
import Game from "./../game/game";

class Root extends React.Component {
    render() {
        return (
            <div>
                <h1>Tic Tac Toe</h1>
                <GameBoard />
            </div>
        );
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Root />, document.getElementById("root"));
})