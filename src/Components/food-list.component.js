import React, { Component } from "react";
import axios from "axios";

export default class FoodList extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      users: [],
      foods: [],
      calories: [],
      carbs: []
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
            foods: [],
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

  onSubmit(e) {
    e.preventDefault();

    const userchoice = {
      username: this.state.username,
    };

    // console.log(userchoice.username);

    axios
      .get("http://localhost:5000/users/" + userchoice.username)
      .then((response) => {
        console.log(response.data.foods);

        this.setState({
          foods: response.data.foods
        });
      });
    // console.log(this.state.foods);
  }

  render() {
    return (
      <div>
        <h3>Food Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
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
            <input
              type="submit"
              value="View Food Log"
              className="btn btn-primary"
            />
          </div>
        </form>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Calories</th>
              <th scope="col">Carbs</th>
              <th scope="col">Change</th>
            </tr>
          </thead>
          <tbody>
            {this.state.foods.map(function (food) {
              return (
                <tr>
                  <td>{food.name}</td>
                  <td>{food.calories}</td>
                  <td>{food.carbs}</td>
                  <td> Placeholder </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
