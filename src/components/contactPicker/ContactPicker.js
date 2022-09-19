import React from "react";

export const ContactPicker = (props) => {
  return (
    <select onChange={props.onChange}>
      <option>No contact is selected</option>
      {props.list.map(item => {
        return <option>{item.name}</option>
      })}
    </select>
  );
};
