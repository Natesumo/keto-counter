import React, { Component } from "react";
import axios from "axios";

export default class CreateFood extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCalories = this.onChangeCalories.bind(this);
    this.onChangeCarbs = this.onChangeCarbs.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      name: "",
      calories: 0,
      carbs: 0,
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/users/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map((user) => user.username),
            username: response.data[0].username,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeCalories(e) {
    this.setState({
      calories: e.target.value,
    });
  }

  onChangeCarbs(e) {
    this.setState({
      carbs: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const food = {
      username: this.state.username,
      name: this.state.name,
      calories: this.state.calories,
      carbs: this.state.carbs,
    };

    axios
      .post("http://localhost:5000/foods/add", food)

    window.location = "/foodadded";
  }

  render() {
    return (
      <div>
        <p className=" display-4 text-center m-3">Create New Food Log</p>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label className="m2 lead">Username: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(function (user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label className="m2 lead">Name of food: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label className="m2 lead">Calories: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.calories}
              onChange={this.onChangeCalories}
            />
          </div>
          <div className="form-group">
            <label className="m2 lead">Carbs (in grams): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.carbs}
              onChange={this.onChangeCarbs}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Food Log"
              className="btn btn-primary p-2"
            />
          </div>
        </form>
      </div>
    );
  }
}
