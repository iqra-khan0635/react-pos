import React from "react";
import productList from "../../data/products.json";
import CartDetail from "./CartDetail";

export default function Cart() {

  return (
    <>
      <div className="p-2">
        <div className="row">
          <h5>Add Product</h5>
          <div className="py-2 col-md-4">
            <select className="form-select">
              <option value="0"> -- No Customer Selected -- </option>
              {productList.map((product, index) => {
                return (
                  <option value={product.id} key={index}>
                    {product.title}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="py-2 col-md-4">
            <input
              type="text"
              id="productName"
              className="form-control"
              value=""
              disabled
            />
          </div>
          <div className="py-2 col-md-2">
            <input
              type="text"
              id="productPrice"
              className="form-control"
              value=""
              disabled
            />
          </div>
          <div className="py-2 col-md-2">
            <button className="btn btn-primary">Add Product</button>
          </div>
        </div>
        <CartDetail />
      </div>
    </>
  );
}
