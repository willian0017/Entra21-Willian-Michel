import React from "react"
import Board from "../Board"


class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{this.props.value}</ol>
          </div>
        </div>
      );
    }
  }