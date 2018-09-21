import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postSmurf } from '../actions';

class SmurfForm extends Component {
  state = {
    name: '',
    age: '',
    height: '',
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddFriend = () => {
    const { name, age, height } = this.state;
    this.props.postSmurf({ name, age, height });
    this.setState({ name: '', age: '', height: '' });
  };

  render() {
    return (
      <form className="Column-Layout">
        <input
          className="input"
          value={this.state.name}
          name="name"
          type="text"
          placeholder="Name"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.age}
          name="age"
          type="text"
          placeholder="Age"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.height}
          name="height"
          type="text"
          placeholder="Email"
          onChange={this.handleInputChange}
        />
        <button onClick={() => this.handleAddFriend()} type="button">
          Add New Friend
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  const { smurfsReducer } = state;
  return {
    error: smurfsReducer.error,
    postingSmurf: smurfsReducer.postingSmurf,
  };
};

export default connect(
  mapStateToProps,
  { postSmurf }
)(SmurfForm);
