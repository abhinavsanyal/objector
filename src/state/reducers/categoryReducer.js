const reducer = (state = 0,action) => {

    switch(action.type) {
        case "ADD_CATEGORY":
            // Add a new category .
            return state + action.payload;
        case "REMOVE_CATEGORY":
            // Remove existing category .
            return state - action.payload;
        default:
            return state;
    }

}

export default reducer;