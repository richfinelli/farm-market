import React from "react";
import { withRouter } from "react-router-dom";

class AddFoodItemForm extends React.Component {
    state = {
        qty: 1,
        remainingChars: 100,
        vegetable: false
    };

    productNameRef = React.createRef();
    productCategoryRef = React.createRef();
    productQtyRef = React.createRef();
    productWeightRef = React.createRef();
    productDescRef = React.createRef();
    productColorRef = React.createRef();
    remainingCharsRef = React.createRef();

    //creates a new food item
    createFoodItem = event => {
        //1. stop form from submitting
        event.preventDefault();
        //2. create foodItem object from refs
        const foodItem = {
            name: this.productNameRef.value.value,
            category: this.productCategoryRef.value.value,
            qty: this.productQtyRef.value.textContent,
            weight: this.productWeightRef.value.value,
            desc: this.productDescRef.value.value,
            color: this.productColorRef.value.value,
            image: "/images/food/tomato.png"
        };
        //3. call the addFoodItem function from Router.js and provide foodItem object as the arg.
        this.props.addFoodItem(foodItem);

        //4. reset the form
        event.currentTarget.reset();
        const qty = 1,
            remainingChars = 100;
        this.setState({ qty, remainingChars });

        //5. Navigate to the dashboard to see the newly added foodItem
        this.props.history.push("/");
    };
    //determine if category is a veggie (used for showing/hiding "colors")
    isVegetable = event => {
        event.preventDefault();
        if (
            this.productCategoryRef &&
            this.productCategoryRef.value &&
            this.productCategoryRef.value.value === "vegetable"
        ) {
            this.setState({ vegetable: true });
        } else {
            this.setState({ vegetable: false });
        }
    };
    //decrease product qty
    decrementQty = event => {
        event.preventDefault();
        const qty = this.state.qty > 1 ? this.state.qty - 1 : 1;
        this.setState({ qty });
    };
    //increase product qty
    incrementQty = event => {
        event.preventDefault();
        const qty = this.state.qty + 1;
        this.setState({ qty });
    };
    //calculate remaining chars
    calculateRemainingChars = () => {
        const remainingChars = 100 - this.productDescRef.value.value.length;
        this.setState({ remainingChars });
    };
    //toggle invalid class if remaining chars dips below 0
    remainingCharsIsValid = () => {
        return this.state.remainingChars < 0
            ? "form-field__hint-text--invalid"
            : "";
    };

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.createFoodItem}>
                    <section className="add-product__title-container add-product__title-container--header">
                        <h1 className="global__title">Add Product</h1>
                        <button type="submit" className="btn btn__secondary">
                            Save Product
                        </button>
                    </section>

                    <div className="add-product__body-container">
                        <section className="add-product__image-container">
                            <figure className="add-product__image">
                                <img
                                    src="/images/food/tomato.png"
                                    alt="tomato"
                                />
                            </figure>
                            <button className="btn btn__image-upload">
                                Update Image
                            </button>
                            {/* <input className="btn btn__image-upload" type="file" id="image-upload" name="image-upload" accept=".jpg, .jpeg, .png" /> */}
                        </section>
                        <section className="add-product__fields-container">
                            <div className="form-field__container">
                                <label htmlFor="productName">
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    id="productName"
                                    name="productName"
                                    ref={this.productNameRef}
                                />
                            </div>
                            <div className="form-field__container">
                                <label htmlFor="productCategory">
                                    Category
                                </label>
                                <select
                                    name="productCategory"
                                    id="productCategory"
                                    ref={this.productCategoryRef}
                                    onInput={this.isVegetable}
                                >
                                    <option value="" />
                                    <option value="vegetable">Vegetable</option>
                                    <option value="fish">Fish</option>
                                    <option value="meat">Meat</option>
                                </select>
                            </div>
                            <div className="form-field__container form-field__container--special">
                                <label htmlFor="productQty">Quantity</label>
                                <div className="product-qty__container">
                                    <button
                                        onClick={this.decrementQty}
                                        className="btn btn__increment"
                                    >
                                        -
                                    </button>
                                    <p id="productQty" ref={this.productQtyRef}>
                                        {this.state.qty}
                                    </p>
                                    <button
                                        onClick={this.incrementQty}
                                        className="btn btn__increment"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="form-field__container">
                                <label htmlFor="productCategory">Weight</label>
                                <input
                                    type="text "
                                    id="productWeight"
                                    name="productWeight"
                                    ref={this.productWeightRef}
                                />
                            </div>
                            <div className="form-field__container">
                                <label htmlFor="productDesc">Description</label>
                                <input
                                    onKeyDown={this.calculateRemainingChars}
                                    type="text "
                                    id="productDesc"
                                    name="productDesc"
                                    ref={this.productDescRef}
                                />
                                <p
                                    className={`form-field__hint-text ${this.remainingCharsIsValid()}`}
                                    ref={this.remainingCharsRef}
                                >
                                    {this.state.remainingChars}
                                </p>
                            </div>
                            <div
                                className={`form-field__container ${
                                    !this.state.vegetable ? "hide" : ""
                                }`}
                            >
                                <label htmlFor="productColor">Color</label>
                                <input
                                    type="text"
                                    id="productColor"
                                    name="productColor"
                                    ref={this.productColorRef}
                                />
                            </div>
                        </section>
                    </div>

                    <section className="add-product__title-container add-product__title-container--footer">
                        <button className="btn btn__secondary">
                            Save Product
                        </button>
                    </section>
                </form>
            </React.Fragment>
        );
    }
}
export default withRouter(AddFoodItemForm);
