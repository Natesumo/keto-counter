import React, { Component } from "react";
import axios from "axios";

export default class SelectUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      users: [],
      id: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/users/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map((user) => user.username, user._id),
            username: response.data[0].username,
            id: response.data.map((user) => user._id),
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.username,
      id: e.target.id,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const userChoice = {
      username: this.state.username,
      id: this.state.id,
    };

    console.log(userChoice);

    axios
      .get("http://localhost:5000/foods/add", userChoice)
      .then((res) => console.log(res.data));

    // window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Create New Food Log</h3>
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
              value="See Food Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
