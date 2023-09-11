// import React from 'react';
import "./Product.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, id, img, price } = props.product;
  // eslint-disable-next-line react/prop-types
  const handleClickToAdd = props.handleClickToAdd;

  return (
    <div style={{ borderRadius: "20px", border: "1px solid teal" }}>
      <div className="product-container">
        <img className="product-image" src={img} alt="" />
        <p style={{ color: "brown", fontSize: "1.4em", margin: "2px 0" }}>
          {title}
        </p>
        <p style={{ color: "blue", fontSize: "1.1em", margin: "2px 0" }}>
          Price: ${price}
        </p>
      </div>
      <button
        // eslint-disable-next-line react/prop-types
        onClick={() => handleClickToAdd(props.product)}
        className="button-add-to-cart"
      >
        <small>Add to Cart ${id}</small>
        <FontAwesomeIcon
          style={{ fontSize: "1.8em", color: "blue" }}
          icon={faCartArrowDown}
        />
      </button>
    </div>
  );
};

export default Product;
