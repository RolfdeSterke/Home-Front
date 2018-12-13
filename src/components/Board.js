import React from 'react';
import Block from './Block'
import Row from 'react-bootstrap/lib/Row'
import Grid from 'react-bootstrap/lib/Grid'

export default class Board extends React.Component {

    render() {
        const cubes = this.props.cubes;
        const board = [];
        for(let i = 0; i < 12; i++) {
            const squareRows = [];
            for(let j = 0; j < 12; j++) {
                squareRows.push(<div><Block color={cubes[i][j]}/></div>)
            }
            board.push(squareRows)
        }
        return(
            <Grid>{board.map((row) => {
                return <Row className="show-grid">{row.map((block) => {return block})}</Row>
            })}</Grid>
        )
    }
}