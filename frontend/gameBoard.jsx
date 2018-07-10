import React from 'react';
import Game from "./../game/game";
import TileItem from "./TileItem";

export default class GameBoard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const game = new Game();
        const board = game.board
        const tiles = board.grid.map(row => {
            return row.map(tile => {
                 return <TileItem  
                    tile={tile}
                />
            })
        });

        console.log(tiles)
        

        console.log(tiles)

        return(
            <div>
                <ul className="board">
                    {tiles}
                </ul>
            </div>
            
        )
    }
}