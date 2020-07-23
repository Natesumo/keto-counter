import React, { Component } from "react";

export default class AddedFood extends Component {
  render() {
    return (
      <div className="alert alert-success m-4 p-4" role="alert">
        <p className="h3 text-center">Food has been added!</p>
      </div>
    );
  }
}
