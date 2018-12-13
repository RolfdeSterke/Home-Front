import React from 'react';
import Col from 'react-bootstrap/lib/Col'

export default class Block extends React.Component {

    render() {
        return(
            <Col cs={1} md={1} style={{backgroundColor: this.props.color, height: '50px'}}>
                <p> </p>
            </Col>
        )
    }
}