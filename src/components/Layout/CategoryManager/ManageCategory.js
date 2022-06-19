import React from "react";
import { CategoryList } from "./CategoryList";
import { useSelector, useDispatch } from "react-redux";

import { AddField, PageWrapper } from "./ManageCatergory.styled";

const ManageCategory = () => {
  const dispatch = useDispatch();

  const { categorySchema, categories } = useSelector((state) => state);

  // Action dispatchers for category crud.
  const addCategory = () => {
    dispatch({ type: "ADD_CATEGORY", payload:{} });
  };
  const nameNewCategory = (value, previous) => {
    dispatch({ type: "NAME_NEW_CATEGORY", payload:{value, previous }});
    dispatch({ type: "UPDATE_NEW_CATEGORY_SCHEMA", payload:{value, previous }});
  };
  const updateCategory = (payload) => {
    dispatch({ type: "UPDATE_CATEGORY", payload });
  };
  const removeCategory = (payload) => {
    dispatch({
      type: "REMOVE_CATEGORY_FROM_LIST",
      payload: { index: categories.indexOf(payload) },
    });
    dispatch({ type: "REMOVE_CATEGORY", payload });
  };

  return (
    <PageWrapper>
      <CategoryList
        categories={categories}
        schema={categorySchema}
        removeCategory={removeCategory}
        updateCategory={updateCategory}
        nameNewCategory={nameNewCategory}
      />
      <AddField onClick={()=>{
        addCategory();
      }}>Add category</AddField>
    </PageWrapper>
  );
};

export default ManageCategory;
