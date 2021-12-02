import React from "react";

function Cart(props) {
  const YourCart = props.CartData;
  return (
    <>
      <h1>Cart: {YourCart.length}</h1>
      <div>
        <h3>Your Cart</h3>
        {YourCart.map((CartItem) => {
          return (
            <>
              <h4>{CartItem.Product}</h4>
              <button onClick={() => props.OnRemove(CartItem.id)}>
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
