import React, {Component} from 'react';
import Board from '../../components/Board'
import Button from 'react-bootstrap/lib/Button'
import Form from 'react-bootstrap/lib/Form'
import {fetchMessage} from "../Actions";

const is_happy = "SMILE";
const smile = [
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#8c95a6", "#282c34", "#282c34", "#282c34", "#282c34", "#8c95a6", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#8c95a6", "#282c34", "#282c34", "#282c34", "#282c34", "#8c95a6", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#8c95a6", "#8c95a6", "#8c95a6", "#8c95a6", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],];

const is_sad = "SAD";
const sad = [
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#8c95a6", "#282c34", "#282c34", "#282c34", "#282c34", "#8c95a6", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#8c95a6", "#8c95a6", "#8c95a6", "#8c95a6", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#8c95a6", "#282c34", "#282c34", "#282c34", "#282c34", "#8c95a6", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],];

const is_talking = "TALKING";
const talking_1 = [
    ["#8c95a6", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#8c95a6", "#282c34", "#282c34", "#282c34", "#282c34", "#8c95a6", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#8c95a6", "#8c95a6", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#8c95a6", "#282c34", "#282c34", "#8c95a6", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#8c95a6", "#282c34", "#282c34", "#8c95a6", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#8c95a6", "#8c95a6", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],];
const talking_2 = [
    ["#8c95a6", "#8c95a6", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#8c95a6", "#282c34", "#282c34", "#282c34", "#282c34", "#8c95a6", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#8c95a6", "#8c95a6", "#8c95a6", "#8c95a6", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#8c95a6", "#282c34", "#282c34", "#282c34", "#282c34", "#8c95a6", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#8c95a6", "#8c95a6", "#8c95a6", "#8c95a6", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],];
const talking_3 = [
    ["#8c95a6", "#8c95a6", "#8c95a6", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#8c95a6", "#282c34", "#282c34", "#282c34", "#282c34", "#8c95a6", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#8c95a6", "#8c95a6", "#8c95a6", "#8c95a6", "#8c95a6", "#8c95a6", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],
    ["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"],];

class Error404 extends Component {
    constructor(props) {
        super(props);
        this.textChanged = this.textChanged.bind(this);
        this.setMessage = this.setMessage.bind(this);
        this.gotText = this.gotText.bind(this);
    }

    componentWillMount() {
        this.setState({
            expression: is_happy,
            talking_slide: 1,
            talking_for: 0,
            message: '',
            text: '',
        });
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    shiftMood() {
        if ( this.state.expression === is_happy ) {
            this.setState({
                expression: is_sad
            })
        } else if ( this.state.expression === is_sad ) {
            this.setState({
                expression: is_happy
            })
        }
    }

    startTalking() {
        this.interval = setInterval(() => {
            if ( this.state.talking_slide === 1 ) {
                this.setState({ talking_slide: 2, talking_for: (this.state.talking_for + 1) })
            } else if ( this.state.talking_slide === 2 ) {
                this.setState({ talking_slide: 3, talking_for: (this.state.talking_for + 1)})
            } else if ( this.state.talking_slide === 3 ) {
                this.setState({ talking_slide: 1, talking_for: (this.state.talking_for + 1)})
            }
            if ( this.state.talking_for === 10 ) {
                this.setState({
                    talking_slide: 1,
                    talking_for: 0,
                    expression: is_happy
                });
                clearInterval(this.interval)
            }

        }, 500);
        this.setState({
            expression: is_talking
        })
    }

    setMessage(message) {
        this.setState({
            message: message
        })
    }

    gotText(e) {
        e.preventDefault();
        fetchMessage(this.state.message, this.setMessage)
    }

    textChanged(e) {
        this.setState({
            message: e.target.value
        })
    }

    render() {
        let cubes = [];
        if ( this.state.expression === is_happy ) {
            cubes = smile
        } else if ( this.state.expression === is_sad ) {
            cubes = sad
        } else if ( this.state.expression === is_talking ) {
            if ( this.state.talking_slide === 1 ) {
                cubes = talking_1
            } else if ( this.state.talking_slide === 2 ) {
                cubes = talking_2
            } else if (this.state.talking_slide === 3 ) {
                cubes = talking_3
            }
        }
        return (
            <div className="Container">
                <h1> Hi! My name is Cubes </h1>
                <span>
                    <Button style={{margin: '5px'}} onClick={() => this.shiftMood()}>Shift moods</Button>
                    <Button style={{margin: '5px'}} onClick={() => this.startTalking()}>Start talking</Button>
                </span>
                <Board cubes={cubes}/>
                <Form horizontal onSubmit={this.gotText}>
                    <input type="text" className="form-control" value={this.state.message}
                           onChange={this.textChanged}/>
                </Form>
            </div>
        )
    }
}

export default Error404;
