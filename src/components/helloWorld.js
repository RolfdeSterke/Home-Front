import React, {Component} from 'react';
import {fetchMessage} from "../domain/Actions.js"

class HelloWorld extends Component {
    componentWillMount() {
        this.setState({
            message: 'Helloww'
        });
        this.setMessage = this.setMessage.bind(this)
    }

    render() {

        if (this.state.message==='Helloww') {
            fetchMessage(this.setMessage)
        }
        return (<p>
            {this.state.message}
        </p>)
    }


    setMessage(message) {
        this.setState({message: message});
    }
}

export default HelloWorld