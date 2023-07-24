import React from "react";

export default function CartDetail() {
  const cartTotal = {
    totalQty: 7,
    totalPrice: 394,
  };
  const cart = [
    {
      id: 19,
      title: "Skin Beauty Serum.",
      description:
        "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
      price: 46,
      qty: 4,
    },
    {
      id: 20,
      title: "Freckle Treatment Cream- 15gm",
      description:
        "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
      price: 70,
      qty: 3,
    },
  ];
  return (
    <div className="mt-3 table-responsive">
      <h5>Cart Detail</h5>
      <table className="table mt-4 table-responsive">
        <thead className="bg-primary text-light ">
          <tr>
            <th>
              <input type="checkbox" id={`checkbox`} />
            </th>
            <th>SNo.#</th>
            <th>Product</th>
            <th>Quantity</th>
            <th className="text-center">Unit Price</th>
            <th className="text-center">Total Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, i) => {
            return (
              <tr key={i}>
                <td>
                  <input type="checkbox" id={`checkbox${i}`} />
                </td>
                <td>{i + 1}</td>
                <td>{item.title}</td>
                <td>
                  <input
                    id={`quantity${i}`}
                    className="form-control"
                    value={item.qty}
                    style={{ width: "150px" }}
                  />
                </td>
                <td className="text-center">{item.price}</td>
                <td className="text-center">{item.qty * item.price}</td>
                <td>
                  <button id={`remove${i}`} className="btn btn-danger btn-sm">
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={3}>Total </th>
            <th className="text-center">{cartTotal.totalQty}</th>
            <th></th>
            <th className="text-center">{cartTotal.totalPrice}</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
