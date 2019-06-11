import React from "react";
import { Link } from "react-router-dom";

const Nav = props => (
  <section className="template__nav sitewide-menu">
    <figure className="sitewide-logo__container">
      <img
        className="sitewide-logo__image"
        src="/images/grocery.svg"
        alt="grocery bag"
      />
    </figure>
    <ul className="sitewide-nav__container">
          <li className="sitewide-nav__button">
            <Link 
              to={{pathname: "/addFoodItem"}} 
              className="btn btn__primary">
              Add products
            </Link>
          </li>
          <li className="sitewide-nav__item">
            <Link
              to={{pathname: "/"}}
              className="sitewide-nav__anchor sitewide-nav__item--active"
            >
              Dashboard
            </Link>
          </li>
          <li className="sitewide-nav__item">
            <a href="/" className="sitewide-nav__anchor">
              Products
            </a>
          </li>
          <li className="sitewide-nav__item">
            <a href="/" className="sitewide-nav__anchor">
              Reports
            </a>
          </li>
        </ul>
  </section>
);

export default Nav;
