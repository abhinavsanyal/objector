import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import itemsReducer from "./itemsReducer";

const reducers = combineReducers({
    categories : categoryReducer,
    items : itemsReducer,
    categorySchema: (state=0) => state
});

export default reducers