import "./Orders.css";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const props = useLoaderData();
  // eslint-disable-next-line no-unused-vars
  const [allBooks, orderedBooks] = props;

  let quantity = 0;
  for (const item of orderedBooks) {
    quantity = parseInt(item.quantity) + quantity;
  }

  return (
    <div className="shop-container">
      <div className="order-summary">
        {orderedBooks.map((book) => (
          <ReviewItem key={book.id} book={book} />
        ))}
      </div>
      <div className="cart-container">
        <Cart addedProductsInCart={orderedBooks} />
      </div>
    </div>
  );
};

export default Orders;
