const initialState = ["ChainSaws","Bulldozers"]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      // Add a new category .
      const categoryList = [...state];
      categoryList.push("");
      return categoryList ;
    case "NAME_NEW_CATEGORY":
      // update category list.
      let newlyAdded = [...state];
          newlyAdded.pop();
          newlyAdded.push(action.payload)

      return newlyAdded ;
    case "REMOVE_CATEGORY_FROM_LIST":
      // Remove existing category .
      const removeIdx = action.payload["index"];
      const filteredCategory = [...state];
      filteredCategory.splice(removeIdx, 1);
      return  filteredCategory;
    default:
      return state;
  }
};

export default reducer;
