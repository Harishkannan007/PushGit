import React, { Component } from 'react';
import axios from 'axios';
import './Show.css';

class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carid: ''
    };
  }

  handleCarIdChange = (event) => {
    this.setState({ carid: event.target.value });
  };

  handleDelete = (event) => {
    event.preventDefault();
    axios.delete(`http://127.0.0.1:8080/deleteid/${this.state.carid}`);
  };

  render() {
    return (
      <form onSubmit={this.handleDelete} className="delete-form">
        <label className="delete-label">Car ID</label>
        <input
          className="delete-input"
          type="text"
          value={this.state.carid}
          onChange={this.handleCarIdChange}
        />

        <button className="delete-button" type="submit">
          Delete
        </button>
      </form>
    );
  }
}

export default Delete;
