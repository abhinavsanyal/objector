const initialState = ["ChainSaws","Bulldozers"]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      // Add a new category .
      const categoryList = [...state];
      categoryList.push(action.payload);
      return categoryList ;
    case "REMOVE_CATEGORY":
      // Remove existing category .
      const removeIdx = action.payload["id"];
      const filteredCategory = [...state];
      filteredCategory.splice(removeIdx, 1);
      return  filteredCategory;
    default:
      return state;
  }
};

export default reducer;
