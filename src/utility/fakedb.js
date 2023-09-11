const getShopingCard = () => {
  let shopingCart = {};
  const storedCart = localStorage.getItem("shoping-cart");
  if (storedCart) {
    shopingCart = JSON.parse(storedCart);
  }
  return shopingCart;
};

/* const getShoppingCart = () => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem('shopping-cart');
  if (storedCart) {
      shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
} */

const addToDb = (id) => {
  let shopingCart = getShopingCard();
  const quantity = shopingCart[id];
  if (!quantity) {
    shopingCart[id] = 1;
  } else {
    shopingCart[id] = quantity + 1;
  }
  localStorage.setItem("shoping-cart", JSON.stringify(shopingCart));
};

/* const addToDb = id => {
  let shoppingCart = getShoppingCart();
  // add quantity
  const quantity = shoppingCart[id];
  if (!quantity) {
      shoppingCart[id] = 1;
  }
  else {
      const newQuantity = quantity + 1;
      shoppingCart[id] = newQuantity;
  }
  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
} */

const removeOneFromDb = (id) => {
  const shopingCart = getShopingCard();
  if (id in shopingCart) {
    delete shopingCart[id];
  }
  localStorage.setItem("shoping-cart", JSON.stringify(shopingCart));
};

const deleteShopingCart = () => {
  localStorage.removeItem("shoping-cart");
};

export { getShopingCard, addToDb, removeOneFromDb, deleteShopingCart };
