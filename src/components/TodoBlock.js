import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Row from 'react-bootstrap/lib/Row';
import Image from 'react-bootstrap/lib/Image';

export default class TodoBlock extends React.Component {

    render() {
        var image = null;
        if(this.props.image_uri !== null) {
            image = <Row><Image style={{"maxWidth": "100%", "paddingBottom": 10}} src={this.props.image_uri} rounded alt=""/></Row>
        }
        return(
            <Panel style={{"margin": "15px", "width": "30rem"}}>
                <Panel.Heading style={{ "padding": "0px 14px 15px 14px"}}>
                    {image}
                    <Row style={{"paddingTop": "10px"}}>
                        <b>Title: </b>{this.props.comment}
                        <img style={{"height": "20px", "float": "right"}} src="edit.svg" alt="" onClick={() => this.props.setModalToShow(this.props.index)}/>
                        </Row>
                </Panel.Heading>
                <Panel.Body style={{"color": "gray"}}><b>uri:</b> <a href={this.props.uri}>Click here</a></Panel.Body>
            </Panel>
        )
    }
}