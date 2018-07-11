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
