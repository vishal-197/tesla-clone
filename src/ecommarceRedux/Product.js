import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./slices/Slice";

function Product() {
  const dis = useDispatch();
  dis(fetchData())
  const pro = useSelector((state) => {
    return state.ecom;
  });

  console.log(pro.products);
  return (
    <div className=" product-box">
      {pro.products.map((product, index) => {
        
        return (
         

          <div className="product-row" key={index}>
            <img src={product.image} alt={product.name}></img>
            <h3>{product.title}</h3>
            <h3>{product.price}</h3>
          </div>
         
        );
      })}
    </div>
  );
}

export default Product;
