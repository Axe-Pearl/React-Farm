import { useState } from "react";
import Items from "./allproducts";
import Cart from "./Cart";

function Products() {
  const [CartInfo, setCartInfo] = useState([]);

  const handleClick = (Item) => {
    const temp = [...CartInfo, Item];
    setCartInfo(temp);
    console.log("cartinfo", CartInfo);
  };
  const RemoveProduct = (id) => {
      const filtered = CartInfo.filter((Item) =>{
           if(id !== Item.id){
            return Item;
           }
       })
      setCartInfo(filtered);
       
  };

  return (
    <div>
      <Cart CartData={CartInfo} OnRemove={RemoveProduct} />
      <hr />
      {Items.map((Item) => {
        return (
          <div style={({ display: "flex" }, { color: "red" })}>
            <h3>{Item.Product}</h3>
            <button onClick={() => handleClick(Item)}>Add to Cart</button>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default Products;
