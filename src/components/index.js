import React, { useEffect, useState } from "react";
import { getCustomers } from "../services/customers";
import Filter from "./Filter";
import ListCard from "./ListCard";

export default function CustomerList() {
  const [customers, setCustomers] = useState();
  const [filter, setFilter] = useState({
    first_name: "",
    _sort: "",
    _order: "",
  });

  // get all customers and filter
  useEffect(() => {
    async function fetchListCustomer() {
      const res = await getCustomers({ ...filter });
      if (res.status === 200) {
        setCustomers(res.data);
      }
    }
    fetchListCustomer();
  }, [filter]);


  return (
    <div className="container py-5">
      <Filter filter={filter} setFilter={setFilter} />
      <ListCard customers={customers} />
    </div>
  );
}
