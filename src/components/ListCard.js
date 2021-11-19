import React from "react";
import Card from "./Card";

export default function ListCard({ customers }) {
  const allCustomers =
    customers && customers.length > 0 ? (
      customers.map((customer, index) => (
        <Card customer={customer} key={index} />
      ))
    ) : (
      <p className="text-center mt-5">No Customers</p>
    );
  return <div className="row justify-content-md-between ">{allCustomers}</div>;
}
