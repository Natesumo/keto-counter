import React, { Component } from "react";
import axios from "axios";

export default class FoodList extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      username: "",
      users: [],
      foods: [],
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

    axios
      .get("http://localhost:5000/users/" + userchoice.username)
      .then((response) => {
        this.setState({
          foods: response.data.foods
        });
      });
  }

  handleClick(food) {
    axios.post('http://localhost:5000/foods/delete/' + food)
  }



  render() {
    return (
      <div>
        <p className=" display-4 text-center m-3">Food Log</p>
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
            <input
              type="submit"
              value="View Food Log"
              className="btn btn-primary p-2"
            />
          </div>
        </form>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Calories</th>
              <th scope="col">Carbs</th>
              <th scope="col">Change</th>
            </tr>
          </thead>
          <tbody>
            {this.state.foods.map(food => {
              return (
                <tr key={food.name}>
                  <td>{food.name}</td>
                  <td>{food.calories}</td>
                  <td>{food.carbs}</td>
                  <td> <a href="/fooddeleted" onClick={() => this.handleClick(food.name)}>Delete</a></td>
                </tr>
              )
            })}
            <tr>
              <td className="lead font-weight-bold">Totals:</td>
              <td className="lead font-weight-bold">{this.state.foods.map(food => food.calories).reduce((a, b) => a + b, 0)}</td>
              <td className="lead font-weight-bold">{this.state.foods.map(food => food.carbs).reduce((a, b) => a + b, 0)}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
