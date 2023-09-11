import "./Cart.css";

const Cart = (props) => {
  const addedProductsInCart = props.addedProductsInCart;

  let total = 0;
  let totalDeliveryCharge = 0;
  for (const product of addedProductsInCart) {
    total += parseFloat(product.price);
    totalDeliveryCharge += parseFloat(product.delivery);
  }
  const tax = (total * 0.07).toFixed(2);
  console.log(typeof total);
  const grandTotal = total + totalDeliveryCharge + parseFloat(tax);

  return (
    <div className="cart">
      <h4>Order summary</h4>
      <p>Order quantity: {addedProductsInCart.length}</p>
      <span>
        <p>Total Price: </p>
        <p>$ {total.toFixed(2)}</p>
      </span>
      <span>
        <p>Total Delivery : </p>
        <p>$ {totalDeliveryCharge.toFixed(2)}</p>
      </span>
      <span>
        <p>Tax: </p>
        <p>$ {tax}</p>
      </span>
      <span id="grand-total">
        <h5>Grand-Total: </h5>
        <h5>$ {grandTotal.toFixed(2)}</h5>
      </span>
    </div>
  );
};

export default Cart;
