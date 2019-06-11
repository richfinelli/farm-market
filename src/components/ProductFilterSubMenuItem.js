
import React from "react";
import {capitalizeFirstLetter} from "../helpers.js";

class ProductFilterSubMenuItem extends React.Component {
  changeHandler = event => {
    this.props.subMenuFilterToggle(event, event.target.name);
    //console.log(event.target.value, event.target.name)
  };

  render() {

    return (
      <li className="pf-sub-menu__item">
        <input onChange={this.changeHandler} 
          type="checkbox" 
          name={this.props.filtertype}
          id={this.props.color}
          value={this.props.color} 
          ref={this.subMenuItemRef}
          />
        <label htmlFor={this.props.color}>{capitalizeFirstLetter(this.props.color)}</label>
      </li>
     )
  }
}
export default ProductFilterSubMenuItem;
