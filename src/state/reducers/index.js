import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import itemsReducer from "./itemsReducer";
import categorySchemaReducer from "./categorySchemaReducer";

const reducers = combineReducers({
    categories : categoryReducer,
    items : itemsReducer,
    categorySchema: categorySchemaReducer
});

export default reducers