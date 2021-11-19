import React from "react";

export default function TextField(props) {
  return (
    <div className="text_filed d-flex justify-content-start align-items-baseline p-2">
      <div className="mx-2">{props.children ? props.children : null}</div>
      <input
        type={props.type}
        name={props.name}
        className="text_input"
        id={props.id}
        value={props.value}
        min={props.min}
        max={props.max}
        disabled={props.disabled}
        onChange={props.onChange}
        onKeyUp={props.onKeyUp}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
        autoComplete="off"
        onKeyDown={props.onEnter}
      />
    </div>
  );
}
