const reducer = (state = 0, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        // Add a new category .
        const items = state.items;
        items.push(action.payload);
        return { ...state, items };
      case "UPDATE_ITEM":
        // Remove existing category .
        const updateId = action.payload["id"];
        const fields = action.payload["fields"];
        const itemList = state.items;
        const filteredItem = itemList.find(item=>{
            return item.id === updateId
        });
        filteredItem.fields = fields;
        return { ...state, items: itemList };
      default:
        return state;
    }
  };
  
  export default reducer;
  