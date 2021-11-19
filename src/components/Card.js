import React from "react";

export default function Card({ customer }) {

  return (
    <div className="col-12 col-md-3 my-3  ">
      <div className="row w-100 m-0 justify-content-between  rounded-lg border bg-white">
        <figure className="col-5 col-md-12 p-0 order-1 order-md-0 m-2 m-md-0">
          <img
            className=" img-rounded w-100 "
            src={customer.image}
            alt="customer"
          />
        </figure>

        <div className="px-3 col-5 col-md-12 mt-2">
          <p className="text-bold">
            {customer.first_name} {customer.last_name}
          </p>
          <p className="text-bold text-color"> {customer.gender}</p>
          <p className="text-bold ">
            <i class="fas fa-map-marker-alt text-color"></i>{" "}
            {customer.ip_address}
          </p>
        </div>

        <div className="col-12 order-3 px-3">
          <p className="text-bold">
            <i class="fas fa-map-marker-alt text-color"></i>{" "}
            {customer.ip_address}
          </p>
          <p className="text-bold">
            <i class="fas fa-envelope text-color"></i> {customer.email}
          </p>
          <p className="text-bold">
            <i class="fas fa-phone-alt text-color"></i> {customer.phone}
          </p>
          <p className="text-bold">
            <i class="far fa-building text-color"></i> {customer.company_name}
          </p>
          <p className="text-bold">
            <i class="fab fa-internet-explorer text-color"></i> {customer.web}
          </p>
        </div>
      </div>
    </div>
  );
}
