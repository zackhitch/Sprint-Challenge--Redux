import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import SmurfForm from './SmurfForm';
import SmurfsList from './SmurfsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        {this.props.error ? <h3>Error Getting Smurfs</h3> : null}
        <div className="listContainer">
          {this.props.gettingSmurfs ? (
            <h3>Getting Smurfs...</h3>
          ) : (
            <SmurfsList smurfs={this.props.smurfs} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { smurfsReducer } = state;
  return {
    smurfs: smurfsReducer.smurfs,
    error: smurfsReducer.error,
    gettingSmurfs: smurfsReducer.gettingSmurfs,
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
