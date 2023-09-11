import { useState } from "react";
import "./Shop.css";
import { useEffect } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getShopingCard } from "../../utility/fakedb";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [addedProductsInCart, setAddedProductsInCart] = useState([]);

  const handleClickToAdd = (product) => {
    const newCartWithNewProduct = [...addedProductsInCart, product];
    setAddedProductsInCart(newCartWithNewProduct);
    console.log(product.id);
    addToDb(product.id);
    // console.log(newCartWithNewProduct);
  };

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const getAddedProductsInCart = getShopingCard();
    console.log(getAddedProductsInCart);
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
        <Cart addedProductsInCart={addedProductsInCart} />
      </div>
    </div>
  );
};

export default Shop;
