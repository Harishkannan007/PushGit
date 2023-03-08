import axios from "axios";
import React, { Component } from "react";
import './Show.css';
class Showdata extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8080/g')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {   
    return (
      <table border={1}>
        <thead>
          <tr>
            <th>Car ID</th>
            <th>Car Name</th>
            <th>Car Prize</th>
            <th>Fuel Type</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(item => (
            <tr key={item.carid}>
              <td>{item.carid}</td>
              <td>{item.carname}</td>
              <td>{item.carprize}</td>
              <td>{item.fueltype}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Showdata;
