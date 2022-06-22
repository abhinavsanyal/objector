import { v4 as uuidv4 } from "uuid";

const initialState = ["ChainSaws", "Bulldozers"];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_CATEGORY":
      // Add a new category .
      const categoryList = [...state];
      categoryList.push(``);
      return categoryList;
    case "UPDATE_CATEGORY_NAME":
      //change name of an existing category.
      return [...state].map((category, index) => {
        if (category === action.payload.previous && index===action.payload.idx) return action.payload.value;
        return category;
      });;
    case "REMOVE_CATEGORY_FROM_LIST":
      // Remove existing category .
      const removeIdx = action.payload["index"];
      const filteredCategory = [...state];
      filteredCategory.splice(removeIdx, 1);
      return filteredCategory;
    default:
      return state;
  }
};

export default reducer;
