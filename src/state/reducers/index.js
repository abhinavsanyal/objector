import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import itemsReducer from "./categoryReducer";

const reducers = combineReducers({
    categories : categoryReducer,
    items : itemsReducer
});

export default reducers