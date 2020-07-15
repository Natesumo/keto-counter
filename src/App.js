import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/navbar.component";
import FoodList from "./Components/food-list.component";
import EditFood from "./Components/edit-food.component";
import CreateFood from "./Components/create-food.component";
import CreateUser from "./Components/create-user.component";
import SelectUser from "./Components/user-select.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route path="/" exact component={SelectUser} />
        <Route path="/food" exact component={FoodList} />
        <Route path="/edit/:id" exact component={EditFood} />
        <Route path="/create" exact component={CreateFood} />
        <Route path="/user" exact component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
