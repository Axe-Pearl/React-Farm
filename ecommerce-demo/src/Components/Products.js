import { useState } from "react";
import Items from "./allproducts";
import Cart from "./Cart";
import "./Products.css";
function Products() {
  const [CartInfo, setCartInfo] = useState([]);

  const handleClick = (Item) => {
    const temp = [...CartInfo, Item];
    setCartInfo(temp);
    // console.log("cartinfo", CartInfo);
  };
  const RemoveProduct = (id) => {
    // console.log("ID: ",id);
    // console.log("cartInfo",CartInfo);
      const filtered = CartInfo.map((Item) =>{
        let tempCartID = CartInfo.indexOf(Item)
       console.log("tempCardID" ,tempCartID);
           if(id === tempCartID ){
            let newArr = [...CartInfo];
            newArr.splice(id,1);
              setCartInfo(newArr)
           }
       })
      //  console.log("INDEX",filtered);

      //  console.log("Cart new",newArr);
        // console.log(CartInfo);
      // setCartInfo(filtered);
       
  };

  return (
    <div>
      <Cart CartData={CartInfo} OnRemove={RemoveProduct} />
      <hr />
      <div className="ProductParent">
      {Items.map((Item) => {
        return (
          <div>
            <div className="ProductContainer">
            <img className="ProductImage" src={Item.imgurl} />
            <h3>{Item.Product}</h3>
            <button onClick={() => handleClick(Item)}>Add to Cart</button>
            </div>
            <br />
            <br />
          </div>
        );
      })}
      </div>
     
    </div>
  );
}

export default Products;
