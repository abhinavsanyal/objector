// import React from 'react';

// const ManageCategory = () => {
//   return (
//     <div>ManageCategory</div>
//   )
// }

import React from "react";
import { CategoryList } from "./CategoryList";
import { useSelector, useDispatch } from "react-redux";
// const ItemCategory = ({ category }) => {
//   return <Category>{category}</Category>;
// };

import { PageWrapper } from "./ManageCatergory.styled";

const ManageCategory = () => {
  const dispatch = useDispatch();

  const { categorySchema, categories } = useSelector((state) => state);

  // Action dispatchers for item crud.
  const addCategory = (payload) => {
    dispatch({ type: "ADD_CATEGORY", payload });
  };
  const updateCategory = (payload) => {
    dispatch({ type: "UPDATE_CATEGORY", payload });
  };
  const removeCategory = (payload) => {
    dispatch({ type: "REMOVE_CATEGORY", payload });
  };
  const updateCategoryName = (payload) => {
    dispatch({ type: "UPDATE_CATEGORY_NAME", payload });
  };

  return (
    <PageWrapper>
      <CategoryList
        categories={categories}
        schema={categorySchema}
        updateCategoryName={updateCategoryName}
        removeCategory={removeCategory}
        updateCategory={updateCategory}
      />
    </PageWrapper>
  );
};

export default ManageCategory;
