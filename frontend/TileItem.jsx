import React from 'react';


class TileItem extends React.Component {
    constructor(props) {
        super(props)
        this.playMove = this.playMove.bind(this);
    }

    playMove(e) {
        e.preventDefault();
        if (!this.props.over) {
            this.props.game.playMove(this.props.pos);
            this.props.update();
            if (this.props.game.computer) {
                setTimeout(() => {
                    if (!this.props.over) {
                        this.props.game.ComputerPlayTurn();
                        this.props.update();
                    }
                }, 300);
            }
        }
    }
    
    render() {
        return (
        <li onClick={this.playMove} className="square">
            {this.props.tile}
        </li>
        );
    }
}


export default TileItem;
