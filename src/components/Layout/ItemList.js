import React from "react";

import {
  ItemWrapper,
  ItemField,
  ItemCard,
  RemoveIcon,
  Category,
} from "./ItemList.styled";

import { Item } from "./Item";

const ItemCategory = ({ category }) => {
  return <Category>{category}</Category>;
};

export const ItemList = ({ items, updateItem, removeItem }) => {
  const onChangeHandler = (e, data, id) => {
    const { value, label } = data;
    updateItem({ value, label, id });
  };

  const filterItems = (items) => {
    return items.filter(item=>{
      let fields = item.fields;
      return fields.length > 0
    })
  }
  return (
    <ItemWrapper>
      {filterItems(items).map((item, index) => {
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
            <ItemCategory category={item.category} />
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
