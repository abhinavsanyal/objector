const reducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      // Add a new category .
      const categoryList = state.categories;
      categoryList.push(action.payload);
      return { ...state, categories: categoryList };
    case "REMOVE_CATEGORY":
      // Remove existing category .
      const removeIdx = action.payload["id"];
      const filteredCategory = state.categories;
      filteredCategory.splice(removeIdx, 1);
      return { ...state, categories: filteredCategory };
    default:
      return state;
  }
};

export default reducer;
