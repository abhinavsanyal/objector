import React from "react";
import {
  ItemWrapper,
  AddFieldButton,
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
  nameNewCategory,
  removeCategoryField,
  hasItemsOfCategory
}) => {
  const addFieldHandler = (type) => {
    let  categoryHasItems = hasItemsOfCategory(type);
    updateCategory({ updates: { type }, addField: true, fieldType: true }, categoryHasItems );
  };
  const removeCategoryHandler = (category) => {
    removeCategory(category);
  };

  const onChangeHandler = (type, data, text, fieldType = false) => {
    const { value } = data;
    let updates = {};
    updates = {
      value,
      text,
      type,
    };
    updateCategory({ updates, addField: false, fieldType}, true);
  };
  return (
    <div>
      <ItemWrapper>
        {categories.map((category, index) => {
          const fields = schema[category];
          return (
            <div>
              <ItemCard key={index}>
                <RemoveIcon
                  id="remove"
                  onClick={() => removeCategoryHandler(category)}
                >
                  {" "}
                  X{" "}
                </RemoveIcon>
                <ItemCategory category={category} />
                <Item
                  fields={fields}
                  category={category}
                  categories={categories}
                  onChangeHandler={onChangeHandler}
                  nameNewCategory={nameNewCategory}
                  removeCategoryField={removeCategoryField}
                  idx={index}
                />
              </ItemCard>
              <AddFieldButton
                disabled={category === ""}
                onClick={() => {
                  if (category === "") return;
                  addFieldHandler(category);
                }}
              >
                {" "}
                Add atrribute
              </AddFieldButton>{" "}
            </div>
          );
        })}
      </ItemWrapper>
    </div>
  );
};
