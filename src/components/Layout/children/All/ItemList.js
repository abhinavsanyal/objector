import React from "react";
import { TextInput, DatePicker, NumberInput } from "./inputFields";
import { ItemWrapper, ItemField, ItemCard,  RemoveIcon} from "./ItemList.styled";

import {useSelector} from "react-redux";

export const ItemList = () => {

  const {items} = useSelector((state)=>state);
  return (
    <ItemWrapper>
      {items.map((item, index) => {
        return (
          <ItemCard key={index}>
             <RemoveIcon id="remove"> X </RemoveIcon>
            <Item fields={item.fields}  />
          </ItemCard>
        );
      })}
    </ItemWrapper>
  );
};

const fieldSelector = (type, key, value, label) => {
  switch (type) {
    case "text":
      return <TextInput key={key} value={value} label={label} />;
    case "date":
      return <DatePicker key={key} value={value} label={label} />;
    case "number":
      return <NumberInput key={key} value={value} label={label} />;
    default:
      return <TextInput key={key} value={value} label={label} />;
  }
};

export const Item = ({ fields }) => {
  return (
    <ItemField>
      {fields.map((field, index) => {
        const { type , value , label } = field;
        return fieldSelector(type, index, value, label);
      })}
    </ItemField>
  );
};
