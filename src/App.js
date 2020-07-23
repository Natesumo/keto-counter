import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/navbar.component";
import FoodList from "./Components/food-list.component";
import CreateFood from "./Components/create-food.component";
import CreateUser from "./Components/create-user.component";
import FoodAdded from "./Components/food-added.component";
import FoodDeleted from "./Components/food-deleted.component";
import UserCreated from "./Components/user-created.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route path="/" exact component={FoodList} />
        <Route path="/create" exact component={CreateFood} />
        <Route path="/user" exact component={CreateUser} />
        <Route path="/foodadded" exact component={FoodAdded} />
        <Route path="/fooddeleted" exact component={FoodDeleted} />
        <Route path="/usercreated" exact component={UserCreated} />
      </div>
    </Router>
  );
}

export default App;
