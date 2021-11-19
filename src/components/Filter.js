import React from "react";
import TextField from "../shared/TextField";

export default function Filter({ filter, setFilter }) {
  return (
    <div className="row justify-content-end justify-content-md-between">
      <div className="col-12 col-md-3">
        <TextField
          hasLabel={false}
          value={filter.first_name}
          type={"text"}
          placeholder={"Find Customer"}
          onChange={(e) => {
            setFilter({
              ...filter,
              first_name: e.target.value.trim(),
            });
          }}
        >
          <i className="fas fa-search"></i>
        </TextField>
      </div>
      <div className="col-6 col-md-3 mt-2 ">
        <select
          value={filter._order}
          name="_order"
          onChange={(e) => {
            setFilter({
              ...filter,
              _sort: "first_name",
              _order: e.target.value,
            });
          }}
          className="text_input bg-white p-2 rounded"
        >
          <option className="text-muted" disabled selected value="">
            Select sort type
          </option>
          <option value="A-Z">A-Z</option>
        </select>
      </div>
    </div>
  );
}
