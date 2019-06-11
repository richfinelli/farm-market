import React from "react";
import Nav from "./Nav";
import AddFoodItemForm from "./AddFoodItemForm";
import { Link } from "react-router-dom";

class AddFoodItemPage extends React.Component {

  render() {
    return <React.Fragment>
        <Nav />
        <main className="template__main">
          <Link 
            to={{ pathname: "/" }} 
            className="gobal__back-link">
            Back
          </Link>

          <AddFoodItemForm addFoodItem={this.props.addFoodItem} />
        </main>
      </React.Fragment>;
  }
}
export default AddFoodItemPage;
