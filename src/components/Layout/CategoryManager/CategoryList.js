import React from "react";
import {
  ItemWrapper,
  AddField,
  ItemCard,
  RemoveIcon,
  Category,
} from "./ManageCatergory.styled";

import { Item } from "./CategoryCard";

const ItemCategory = ({ category }) => {
  return <Category>{category}</Category>;
};

export const CategoryList = ({
  categories,
  schema,
  updateCategory,
  removeCategory,
  nameNewCategory
}) => {
  const addFieldHandler = (type) => {
    updateCategory({ updates: { type }, addField: true });
  };
  const removeFieldHandler = (category) => {
    removeCategory(category);
  };

  const onChangeHandler = (type, data, text, fieldType= false) => {
    const { value } = data;
    let updates = {};
    updates = {
      value,
      text,
      type,
    };
    updateCategory({ updates, addField: false , fieldType});
  };
  return (
    <div>
      <ItemWrapper>
        {categories.map((category, index) => {
          const fields = schema[category];
          return (
            <div>
              <ItemCard key={index}>
                <RemoveIcon id="remove" onClick={()=>removeFieldHandler(category)}> X </RemoveIcon>
                <ItemCategory category={category} />
                <Item
                  fields={fields}
                  id={category?category:""}
                  onChangeHandler={onChangeHandler}
                  nameNewCategory={nameNewCategory}
                />
              </ItemCard>
              <AddField onClick={() => {addFieldHandler(category)}}> Add atrribute</AddField>{" "}
            </div>
          );
        })}
      </ItemWrapper>
    </div>
  );
};
