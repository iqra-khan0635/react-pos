import React from "react";

export default function Checkout() {
  return (
    <div className="p-2" align="right">
      <button className="btn btn-danger m-1">Cancel</button>
      <button className="btn btn-warning m-1">Hold</button>
      <button className="btn btn-primary m-1">Save & Print</button>
      <button className="btn btn-success m-1">Save</button>
    </div>
  );
}
