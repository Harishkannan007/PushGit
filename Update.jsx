import React, { Component } from 'react';

import axios from 'axios';
import './Show.css';
class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carid: '',
      carname: '',
      carprize: '',
      fueltype: ''
    };
  }

  handleCarIdChange = (event) => {
    this.setState({ carid: event.target.value });
  };

  handleCarNameChange = (event) => {
    this.setState({ carname: event.target.value });
  };

  handleCarPrizeChange = (event) => {
    this.setState({ carprize: event.target.value });
  };

  handleFuelTypeChange = (event) => {
    this.setState({ fueltype: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      carid: this.state.carid,
      carname: this.state.carname,
      carprize: this.state.carprize,
      fueltype: this.state.fueltype
    };

    axios.put('http://127.0.0.1:8080/update', data);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="sign-form">
        <label className="sign-label">Car ID</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.carid}
          onChange={this.handleCarIdChange}
        />

        <label className="sign-label">Car Name</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.carname}
          onChange={this.handleCarNameChange}
        />

        <label className="sign-label">Car Prize</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.carprize}
          onChange={this.handleCarPizeChange}
        />

        <label className="sign-label">Fuel Type</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.fueltype}
          onChange={this.handleFuelTypeChange}
        />

        <button className="update-button" type="submit">
          Update
        </button>
      </form>
    );
  }
}

export default Update;
