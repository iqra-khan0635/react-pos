import React from "react";

export default function PaymentMethods() {
  const paymentMethods = [
    {
      id: "cod",
      title: "Cash on Delivery",
    },
    {
      id: "card",
      title: "Card",
    },
    {
      id: "credit",
      title: "Credit",
    },
  ];

  return (
    <div className="p-2">
      <h5 className="h5">Payment Methods</h5>
      {paymentMethods.map((paymentMethod, index) => {
        return (
          <div className="form-check form-check-inline" key={index}>
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              id={`${paymentMethod.id}`}
              value={paymentMethod.id}
              defaultChecked={index === 0}
            />
            <label className="form-check-label" htmlFor={`${paymentMethod.id}`}>
              {paymentMethod.title}
            </label>
          </div>
        );
      })}
    </div>
  );
}
