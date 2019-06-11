import React from "react";

class FoodItem extends React.Component {
  render() {
    const {name, image, category, weight, qty, desc} = this.props.details;

    return <li className="product-card">
        <figure className="product-card__image">
          <img src={image} alt={name} />
        </figure>
        <div className="product-card__details">
          <p className="product-card__category">{category}</p>
          <p className="product-card__title">{name}</p>
          <div className="product-card__attribute-container">
            <div className="product-card__attribute">
              <p className="product-card__attribute-title">Quantity</p>
              <p className="product-card__attribute-value">{qty}</p>
            </div>
            <div className="product-card__attribute">
              <p className="product-card__attribute-title">Weight</p>
              <p className="product-card__attribute-value">{weight}</p>
            </div>
          </div>
          <p className="product-card__description">{desc}</p>
        </div>
      </li>;
  }
}
export default FoodItem;
