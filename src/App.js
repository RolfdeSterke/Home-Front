import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/helloWorld'
import Robot from './domain/pages/Robot.js'
import Todo from './domain/pages/Todo.js'
import { BrowserRouter, Route, Switch} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
          <link rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
                integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
                crossOrigin="anonymous" />
          <header className="App-header">
          <BrowserRouter>
            <Switch>
              <Route exact path='/robot' render={() => (
                <Robot />
              )}/>
              <Route exact path='/hidden' render={() => (
                  <Todo hidden={true}/>
              )}/>
              <Route exact path='/' render={() => (
                  <Todo hidden={false}/>
              )}/>
              <Route exact path='/' render={() => (
                  <div>
                <img src={logo} className="App-logo" alt="logo" />
                <HelloWorld/>
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
                  </div>
              )}/>
            </Switch>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
