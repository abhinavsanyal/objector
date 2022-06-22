import React from "react";
import { CategoryList } from "./CategoryList";
import { useSelector, useDispatch } from "react-redux";

import { AddFieldButton, PageWrapper } from "./ManageCatergory.styled";

const ManageCategory = () => {
  const dispatch = useDispatch();

  const { categorySchema, categories, items } = useSelector((state) => state);

  const hasItemsOfCategory = (category) => {
    const _items = items.filter(item => item.category === category);
    return _items.length >0? true:false;
  }
  // Action dispatchers for category crud.
  const addCategory = () => {
    dispatch({ type: "ADD_NEW_CATEGORY", payload:{} });
    dispatch({ type: "UPDATE_NEW_CATEGORY_SCHEMA", payload:{value:categories.length-1,previous: null} });
  };
  const nameNewCategory = (value, previous, idx) => {
    dispatch({ type: "UPDATE_CATEGORY_NAME", payload:{value, previous , idx}});
    dispatch({ type: "UPDATE_NEW_CATEGORY_SCHEMA", payload:{value, previous, new: false }});
    // Retroactively modify all existing items of this category.
    dispatch({ type: "UPDATE_ITEM_CATEGORIES", payload:{value, previous }});
  };
  const updateCategory = (payload, existing) => {
    // Update Category : Add new field | Modify existing field .
    dispatch({ type: "UPDATE_CATEGORY", payload });

      // Retroactively modify all existing items of this category.
      if( existing) {
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
  const removeCategoryField = ({category, fieldKey, label}) => {
    dispatch({
      type: "REMOVE_CATEGORY_FIELD_FROM_SCHEMA",
      payload :{category, fieldKey} 
    })
    dispatch({ type: "REMOVE_ITEM_FIELD", payload:{category, fieldKey, fieldLabel:label}  });
  };

  return (
    <PageWrapper>
      <CategoryList
        categories={categories}
        schema={categorySchema}
        removeCategory={removeCategory}
        updateCategory={updateCategory}
        nameNewCategory={nameNewCategory}
        removeCategoryField={removeCategoryField}
        hasItemsOfCategory={hasItemsOfCategory}
      />
      <AddFieldButton onClick={()=>{
        addCategory();
      }}>Add category</AddFieldButton>
    </PageWrapper>
  );
};

export default ManageCategory;
