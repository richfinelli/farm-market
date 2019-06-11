import React from "react";
import ProductFilterSubMenuItem from "./ProductFilterSubMenuItem"
class ProductFilter extends React.Component {
    state = {
        subMenuOpen: {
            Category: false, 
            Color: false
        }
    }
    onlyUniqueItems = (key, index, array) => {
    return array.indexOf(key) === index;
    };
    //show/hide product filter sub menu
    toggleSubMenu = event => {
        //1. prevent default
        event.preventDefault();
        //2. make a copy of state
        const subMenuOpen = { ...this.state.subMenuOpen };
        //3. check to see if the sub menu is open or closed and change it to the opposite
        if (subMenuOpen[event.target.textContent] === false) {
            subMenuOpen[event.target.textContent] = true;
        } else {
            subMenuOpen[event.target.textContent] = false;
        }
        //4.update state
        this.setState({ subMenuOpen: subMenuOpen });
    };
  render() {
    return <ul className="product-filter">
        <li className="product-filter__item">
          <p className="product-filter__title">Filter by</p>
        </li>
        <li className="product-filter__item">
          <button className="product-filter__button">Product</button>
        </li>
        <li className="product-filter__item">
            <button onClick={this.toggleSubMenu} className="product-filter__button">Category</button>
            <ul className={`pf-sub-menu ${this.state.subMenuOpen.Category ? "pf-sub-menu--open" : ""}`}>
            {Object.keys(this.props.foodItems)
                .map(key => {
                return this.props.foodItems[key].category;
                })
                .filter((key, index, array) => {
                return this.onlyUniqueItems(key, index, array);
                })
                .map((key, index) => {
                    return <ProductFilterSubMenuItem 
                        key={index} index={index} 
                        color={key} 
                        categories={this.props.category} 
                        details={this.props.foodItems[key]} 
                        filtertype={`categories`}
                        subMenuFilterToggle={this.props.subMenuFilterToggle} 
                    />;
            })}
            </ul>
        </li>
        <li className="product-filter__item">
          <button onClick={this.toggleSubMenu} className="product-filter__button">
            Color
          </button>
          <ul className={`pf-sub-menu ${this.state.subMenuOpen.Color ? "pf-sub-menu--open" : ""}`}>
            {Object.keys(this.props.foodItems)
              .map(key => {
                return this.props.foodItems[key].color;
              })
              .filter((key, index, array) => {
                return this.onlyUniqueItems(key, index, array);
              })
              .map((key, index) => {
                  return <ProductFilterSubMenuItem 
                    key={index} index={index} 
                    color={key} 
                    colors={this.props.colors} 
                    details={this.props.foodItems[key]} 
                    filtertype={`colors`}
                    subMenuFilterToggle={this.props.subMenuFilterToggle} />;
              })}
          </ul>
        </li>
      </ul>;
  }
}
export default ProductFilter;

 
