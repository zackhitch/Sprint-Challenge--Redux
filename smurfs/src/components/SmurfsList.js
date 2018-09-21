import React, { Component } from 'react';
import { connect } from 'react-redux';

class SmurfsList extends Component {
  render() {
    return (
      <div className="smurfsContainer">
        <ul className="smurfsList">
          {this.props.smurfs.map(smurf => {
            return <li key={smurf.name}>{smurf.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default SmurfsList;
