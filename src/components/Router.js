import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from "./Dashboard";
import AddFoodItemPage from "./AddFoodItemPage";
import food from "../food";
import NotFound from "./NotFound";

class App extends React.Component {
  state = {
    foodItems: food
  };
  //ADD a new Food Item to State (Called from the Add Product page)
  addFoodItem = foodItem => {
    //1. take a copy of existing state
    const foodItems = { ...this.state.foodItems };
    //2. add a new foodItem to foodItems variable
    foodItems[`foodItem${Date.now()}`] = foodItem;
    //3. set the new foodItem object to state
    this.setState({ foodItems }); //es6 shorthand for foodItems: foodItems
  };
  


  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/"
            render={() => {
              return (
                <Dashboard foodItems={this.state.foodItems} />
              );
            }}
          />
          <Route exact path="/addFoodItem"
            render={() => {
              return ( 
                <AddFoodItemPage addFoodItem={this.addFoodItem} />
              );
            }}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;