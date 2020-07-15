import React, { Component } from "react";

export default class CreateFood extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
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
            <label>Name of food: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Calories: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.calories}
              onChange={this.onChangeCalories}
            />
          </div>
          <div className="form-group">
            <label>Carbs (in grams): </label>
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
              className="btn btn-primary"
            />
          </div>
        </form>
=======
        <p>You are on the Create Food Component.</p>
>>>>>>> parent of 57775aa... Frontend successfully talking to backend
      </div>
    );
  }
}
