import React from "react";
import { TextInput, DatePicker, NumberInput } from "../Common/inputFields";
import { ItemField } from "./ItemList.styled";

const fieldSelector = (type, key, value, label, onChangeHandler, id) => {
  switch (type) {
    case "text":
      return (
        <TextInput
          key={key}
          value={value}
          label={label}
          onChangeHandler={onChangeHandler}
          id={id}
        />
      );
    case "date":
      return (
        <DatePicker
          key={key}
          value={value}
          label={label}
          onChangeHandler={onChangeHandler}
          id={id}
        />
      );
    case "number":
      return (
        <NumberInput
          key={key}
          value={value}
          label={label}
          onChangeHandler={onChangeHandler}
          id={id}
        />
      );
    default:
      return (
        <TextInput
          key={key}
          value={value}
          label={label}
          onChangeHandler={onChangeHandler}
          id={id}
        />
      );
  }
};

export const Item = ({ fields, onChangeHandler, id }) => {

  const filterFields = (fields) => {
    return fields.filter(field=>{
      const { type, value, label } = field;
      if(label === "" || !label) return false;
      return true;
    })
  }

  return (
    <ItemField>
      {filterFields(fields).map((field, index) => {
        const { type, value, label } = field;
        return fieldSelector(type, index, value, label, onChangeHandler, id);
      })}
    </ItemField>
  );
};
