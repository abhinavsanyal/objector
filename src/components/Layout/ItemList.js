import React from "react";

import {
  ItemWrapper,
  ItemCard,
  RemoveIcon,
  Category,
} from "./ItemList.styled";

import { Item } from "./Item";

export const ItemList = ({ items, updateItem, removeItem }) => {
  const onChangeHandler = (e, data, id) => {
    const { value, label } = data;
    updateItem({ value, label, id });
  };
  console.log("Render: ItemList");

  return (
    <ItemWrapper>
      {items.map((item, index) => {
        return (
          <ItemCard key={index}>
            <RemoveIcon
              id="remove"
              onClick={() => {
                removeItem(item.id);
              }}
            >
              X
            </RemoveIcon>
            <Category>{item.category}</Category>
            <Item
              fields={item.fields}
              id={item.id}
              onChangeHandler={onChangeHandler}
            />
          </ItemCard>
        );
      })}
    </ItemWrapper>
  );
};
