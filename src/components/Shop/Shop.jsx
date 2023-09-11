import { useState } from "react";
import "./Shop.css";
import { useEffect } from "react";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [addedProductsInCart, setAddedProductsInCart] = useState([]);

  const handleClickToAdd = (product) => {
    const newCartWithNewProduct = [...addedProductsInCart, product];
    setAddedProductsInCart(newCartWithNewProduct);
    // console.log(newCartWithNewProduct);
  };

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleClickToAdd={handleClickToAdd}
          />
        ))}
      </div>
      <div className="cart-container">
        <h4>Order summary</h4>
        <h5>Added Books: {addedProductsInCart.length}</h5>
      </div>
    </div>
  );
};

export default Shop;
