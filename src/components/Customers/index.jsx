import React from "react";
import customers from "../../data/customers.json";

export default function Customers() {
  return (
    <div className="p-2">
      <div className="row d-flex flex-row">
        <h5>Customer Detail</h5>
        <div className="py-2 col-md-4">
          <select className="form-select">
            <option value="0"> -- No Customer Selected -- </option>
            {customers.map((customer, index) => {
              return (
                <option value={customer.id} key={index}>
                  {customer.firstName} {customer.lastName}
                </option>
              );
            })}
          </select>
        </div>
        <div className="py-2 col-md-4">
          <input
            type="text"
            id="customerName"
            className="form-control"
            value=""
            disabled
          />
        </div>
        <div className="py-2 col-md-4">
          <input
            type="text"
            id="customerPhoneNumber"
            className="form-control"
            value=""
            disabled
          />
        </div>
      </div>
    </div>
  );
}
