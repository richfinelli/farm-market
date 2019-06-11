import React from "react";
import Nav from "./Nav";
import FoodItem from "./FoodItem";
import ProductFilter from "./ProductFilter";
import { isEmpty } from "../helpers";
import TotalProducts from "./TotalProducts";

class Dashboard extends React.Component {
    state = {
        categories: {},
        colors: {}
    };

    //filterType replaces this.state.colors
    //productFilter repleaces const colors
    subMenuFilterToggle = (event, filterType) => {
        //1. make a copy of state
        if (filterType && filterType === "categories") {
            const categories = { ...this.state[filterType] };
            //2. get current color
            const category = this.state[filterType][event.target.value]
                ? this.state[filterType][event.target.value]
                : false;
            //3. update current color
            categories[event.target.value] = !category;
            //4. update state
            this.setState({ categories });
        } else if (filterType && filterType === "colors") {
            const colors = { ...this.state[filterType] };
            //2. get current color
            const color = this.state[filterType][event.target.value]
                ? this.state[filterType][event.target.value]
                : false;
            //3. update current color
            colors[event.target.value] = !color;
            //4. update state
            this.setState({ colors });
        }
    };
    filterFoodItemsByColor = key => {
        //we need to show foodItems with no category
        //AND food items that match this.state.categories[key] === true

        //check to see if the color picker has no selections
        const noCategoriesSelected = isEmpty(this.state.categories);
        if (noCategoriesSelected) {
            return true;
        }
        //1. Get the foodItem categories
        const foodItem = this.props.foodItems[key].category;
        //2. show if no foodItem.color (undefined)
        if (typeof foodItem === "undefined") {
            return true;
            //3. show if foodItem.color is "red"
        } else {
            return this.state.categories[foodItem] === true;
        }
    };
    filterFoodItemsByCategory = key => {
        //we need to show foodItems with no color
        //AND food items that match this.state.colors[key] === true

        //check to see if the color picker has no selections
        const noColorsSelected = isEmpty(this.state.colors);
        if (noColorsSelected) {
            return true;
        }
        //1. Get the foodItem color
        const foodItem = this.props.foodItems[key].color;
        //2. show if no foodItem.color (undefined)
        if (typeof foodItem === "undefined") {
            return true;
            //3. show if foodItem.color is "red"
        } else {
            return this.state.colors[foodItem] === true;
        }
    };

    render() {
        return (
            <React.Fragment>
                <Nav />
                <main className="template__main">
                    <ProductFilter
                        colors={this.state.colors}
                        subMenuFilterToggle={this.subMenuFilterToggle}
                        filterFunc={this.filterFunc}
                        foodItems={this.props.foodItems}
                    />

                    <p className="global__title--less2">
                        <TotalProducts totalProducts={this.props.foodItems} />
                    </p>
                    <ul className="products-container">
                        {Object.keys(this.props.foodItems)
                            .filter(key => this.filterFoodItemsByColor(key))
                            .filter(key => this.filterFoodItemsByCategory(key))
                            .map(key => (
                                <FoodItem
                                    key={key}
                                    index={key}
                                    details={this.props.foodItems[key]}
                                />
                            ))}
                    </ul>
                </main>
            </React.Fragment>
        );
    }
}

export default Dashboard;
