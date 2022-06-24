import React from "react";
import { CategoryList } from "./CategoryList";
import { useSelector, useDispatch } from "react-redux";

import { AddFieldButton, PageWrapper } from "./ManageCatergory.styled";
import {
  FLEX_POSITION_OPTIONS,
  FLEX_DIRECTIONS,
  FLEX_WRAP_OPTIONS,
  FlexContainer,
  FlexItem,
} from "../../Common/styles";
import { Button } from "semantic-ui-react";

const ManageCategory = () => {
  const dispatch = useDispatch();

  const { categorySchema, categories, items } = useSelector((state) => state);

  const hasItemsOfCategory = (category) => {
    const _items = items.filter((item) => item.category === category);
    return _items.length > 0 ? true : false;
  };
  // Action dispatchers for category crud.
  const addCategory = () => {
    dispatch({ type: "ADD_NEW_CATEGORY", payload: {} });
    dispatch({
      type: "UPDATE_NEW_CATEGORY_SCHEMA",
      payload: { value: categories.length - 1, previous: null },
    });
  };
  const nameNewCategory = (value, previous, idx) => {
    dispatch({
      type: "UPDATE_CATEGORY_NAME",
      payload: { value, previous, idx },
    });
    dispatch({
      type: "UPDATE_NEW_CATEGORY_SCHEMA",
      payload: { value, previous, new: false },
    });
    // Retroactively modify all existing items of this category.
    dispatch({ type: "UPDATE_ITEM_CATEGORIES", payload: { value, previous } });
  };
  const updateCategory = (payload, existing) => {
    // Update Category : Add new field | Modify existing field .
    dispatch({ type: "UPDATE_CATEGORY", payload });

    // Retroactively modify all existing items of this category.
    if (existing) {
      dispatch({ type: "UPDATE_ITEM_FIELD", payload });
    }
  };
  const removeCategory = (payload) => {
    dispatch({
      type: "REMOVE_CATEGORY_FROM_LIST",
      payload: { index: categories.indexOf(payload) },
    });
    dispatch({ type: "REMOVE_CATEGORY_FROM_SCHEMA", payload });
  };
  const removeCategoryField = ({ category, fieldKey, label }) => {
    dispatch({
      type: "REMOVE_CATEGORY_FIELD_FROM_SCHEMA",
      payload: { category, fieldKey },
    });
    dispatch({
      type: "REMOVE_ITEM_FIELD",
      payload: { category, fieldKey, fieldLabel: label },
    });
  };
  console.log("Render: ManageCategory");

  return (
    <FlexContainer
      justify={FLEX_POSITION_OPTIONS.center}
      align={FLEX_POSITION_OPTIONS.unset}
      wrap={FLEX_WRAP_OPTIONS.reverse}
    >
      <FlexItem
        justify={FLEX_POSITION_OPTIONS.end}
        // align={FLEX_POSITION_OPTIONS.unset}
        width={1}
      >
        <CategoryList
          categories={categories}
          schema={categorySchema}
          removeCategory={removeCategory}
          updateCategory={updateCategory}
          nameNewCategory={nameNewCategory}
          removeCategoryField={removeCategoryField}
          hasItemsOfCategory={hasItemsOfCategory}
        />
      </FlexItem>
      <FlexItem
        justify={FLEX_POSITION_OPTIONS.start}
        align={FLEX_POSITION_OPTIONS.baseline}
        width={0.4}
      >
        <FlexContainer justify={FLEX_POSITION_OPTIONS.start}>
          <FlexItem margin={30}>
            <Button
              onClick={() => {
                addCategory();
              }}
            >
              Add category
            </Button>
          </FlexItem>
        </FlexContainer>
      </FlexItem>
    </FlexContainer>
    // <PageWrapper>
    // </PageWrapper>
  );
};

export default ManageCategory;
