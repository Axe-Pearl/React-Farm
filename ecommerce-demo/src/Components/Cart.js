import React from "react";

function Cart(props) {
  const YourCart = props.CartData;
  // console.log("Your Cart",YourCart);
  return (
    <>
      <h1>Cart: {YourCart.length}</h1>
      <div>
        <h3>Your Cart</h3>
        {YourCart.map((CartItem) => {
          let tempID = YourCart.indexOf(CartItem);
          return (
            <>
              <h4>{CartItem.Product}</h4>
              <button onClick={() => props.OnRemove(tempID)}>
                Remove
              </button>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Cart;
