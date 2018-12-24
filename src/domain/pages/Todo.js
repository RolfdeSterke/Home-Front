import React, {Component} from 'react';
import TodoBlock from '../../components/TodoBlock'
import {fetchTodoList, saveTodoChanges, deleteTodo} from "../Actions";
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'
import Row from 'react-bootstrap/lib/Row'
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';


class Todo extends Component {
    componentWillMount() {
        this.setState({
            todos: null,
            show_modal: null,
            title: "",
            uri: "",
            is_hidden: false,
        });
        this.setTodosList = this.setTodosList.bind(this);
        this.setModalToShow = this.setModalToShow.bind(this);
        this.setResponseValue = this.setResponseValue.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeUri = this.changeUri.bind(this);
        this.changeImageUri = this.changeImageUri.bind(this);
        this.changeIsHidden = this.changeIsHidden.bind(this);
        this.delete = this.delete.bind(this);
    }

    setResponseValue(response){
        var todos = this.state.todos;
        todos[this.state.show_modal] = response;
        this.setState({todos: todos});
        this.setState({show_modal: null});
    }
    setTodosList(todos) {
        this.setState({todos: todos});
    }
    setModalToShow(show_modal) {
        var todos = this.state.todos;
        if (show_modal !== null && show_modal !== -1){
            this.setState({
                show_modal: show_modal,
                title: todos[show_modal].comment,
                uri: todos[show_modal].uri,
                image_uri: todos[show_modal].image_uri,
                is_hidden: todos[show_modal].is_hidden
            })
        } else {
            this.setState({
                show_modal: show_modal,
                title: "",
                uri: "",
                image_uri: "",
                is_hidden: false
            })
        }

    }

    saveChanges(id) {
        saveTodoChanges(id, this.state.title, this.state.uri, this.state.image_uri, this.state.is_hidden, this.setResponseValue)
    }

    delete(id) {
        deleteTodo(id);
        this.setState({
            show_modal: null,
        })
    }

    changeTitle(event){
        this.setState({title: event.target.value});
    }
    changeUri(event){
        this.setState({uri: event.target.value});
    }
    changeImageUri(event){
        this.setState({image_uri: event.target.value});
    }
    changeIsHidden(event){
        this.setState({is_hidden: event.target.value});
    }

    render() {
        if (this.state.todos === null) {
            fetchTodoList(this.setTodosList)
        }

        var modal = null;
        if (this.state.show_modal !== null) {
            let id = null;
            if (this.state.show_modal === -1) {
                id = -1
            } else {
                id = this.state.todos[this.state.show_modal]['id']
            }
            modal = <div className="static-modal" style={{"color": "black"}}>
                        <Modal.Dialog>
                            <Modal.Header>
                                <Modal.Title>
                                    <TextField
                                        inputProps={{style:{fontSize: "2rem"}}}
                                        value={this.state.title}
                                        onChange={this.changeTitle}
                                        fullWidth
                                        label="Title"/>
                                </Modal.Title>
                            </Modal.Header>
                        <Modal.Body style={{"color": "gray"}}>
                            <TextField
                                inputProps={{style:{fontSize: "1.5rem"}}}
                                value={this.state.uri}
                                onChange={this.changeUri}
                                fullWidth
                                label="Uri"/>
                            <hr/>
                            <TextField
                                inputProps={{style:{fontSize: "1.5rem"}}}
                                value={this.state.image_uri}
                                onChange={this.changeImageUri}
                                fullWidth
                                label="Image_uri"/>
                            <hr/>
                            <Switch
                                value={this.state.is_hidden}
                                onChange={this.changeIsHidden} />
                        </Modal.Body>

                        <Modal.Footer>
                            {id !== -1 ? <Button onClick={() => this.delete(id)} bsStyle="danger pull-left">DELETE</Button> : null}
                          <Button onClick={() => this.setModalToShow(null)}>Close</Button>
                          <Button onClick={() => this.saveChanges(id)} bsStyle="primary">Save changes</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
        }
        if (this.state.todos !== null) {
            var i = -1;
            return (
                <div className="Container">
                    <Row>
                        <h1> Hey! this is your list!!</h1>
                        <Button onClick={() => this.setModalToShow(-1)}>Create new</Button>
                    </Row>
                    {modal}
                    <span>
                        {this.state.todos.map((todo) => {
                            i++;
                            return <TodoBlock
                                setModalToShow={this.setModalToShow}
                                key={i}
                                index={i}
                                comment={todo.comment}
                                uri={todo.uri}
                                image_uri={todo.image_uri}/>
                        })}
                    </span>
                </div>
            )
        } else {
            return (
            <div className="Container">
                <h1> Hey! this is your list!</h1>
                <span>
                </span>
            </div>
            )
        }
    }
}

export default Todo;
