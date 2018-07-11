import React from 'react';
import TileItem from "./TileItem";

export default class GameBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const game = this.props.game;
        const board = this.props.board;
        let i = -1; 
        const tiles = board.grid.map(row => {
            let j = -1;
            i++;
            return row.map(tile => {
                j++;
                let position = [i, j];
                return <TileItem  
                    tile={tile}
                    key={`tile-${position}`}
                    pos={position}
                    game={game}
                    update={this.props.update}
                    over={this.props.over}
                />
            })
        });


        return(
            <div>
                <ul className="board">
                    {tiles}
                </ul>
            </div>
            
        )
    }
}