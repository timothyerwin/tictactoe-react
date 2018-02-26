import React, { Component } from 'react';
import 'normalize.css';

import { connect } from "react-redux";

import Side from './components/side';
import Board from './components/board';
import Result from './components/result';

import './App.css';

import { store } from './store';

import { showResults } from "./actions";

const mapDispatchToProps = dispatch => {
  return {
    showResults: () => dispatch(showResults())
  };
};

class ConnectedApp extends Component {
  render() {
    if(this.props.over) {
      setTimeout(() => {
        store.dispatch(showResults());
      }, 500);
    }

    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Tic Tac Toe</h1>
        </header>
        <p className='App-intro'>
          Hi. Please choose a side or start playing.
        </p>
        <Side />
        <br/>
        { this.props.results === true ?
         (<Result value={this.props} />)  : (<Board />)
        }

      </div>
    );
  }
}

const mapStateToProps = state => state;

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);

export default App;
