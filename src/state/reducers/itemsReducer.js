const initialState = [
  {
    category: "ChainSaws",
    id: "ChainSaw 1",
    fields: [
      { type: "text", value: "Chain saw 1", label: "Model" },
      { type: "text", value: "Electric", label: "Type" },
      { type: "text", value: "A1", label: "Grade" },
      { type: "number", value: 123, label: "Bar Length" },
      { type: "text", value: "Chain saw 1", label: "Brand" },
      { type: "date", value: "Chain saw 1", label: "Build Date" },
      { type: "number", value: 10, label: "Quantity" },
    ],
  },
  {
    category: "Bulldozers",
    id: "Bulldozer 1",
    fields: [
      { type: "text", value: "Bulldozer 1", label: "Model" },
      { type: "text", value: "Electric", label: "Power Net" },
      { type: "number", value: 123, label: "Operating Weight" },
      { type: "text", value: "Chain saw 1", label: "Brand" },
      { type: "date", value: "Chain saw 1", label: "Build Date" },
      { type: "number", value: 10, label: "Quantity" },
    ],
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      // Add a new item.
      const items = [...state];
      if(action.payload.fields.length > 0 ){
        items.push(action.payload);
      }
      return items;
    case "REMOVE_ITEM":
      // Remove an item from inventory by id.
      const updatedList = state.filter((item) => item.id !== action.payload);
      return updatedList;
    case "UPDATE_ITEM_CATEGORIES":
      const updatedItems = state.map((item) => {
        if (item.category === action.payload.previous)
          return { ...item, category: action.payload.value };
        return item;
      });

      return updatedItems;
    case "REMOVE_ITEM_FIELD":

      const {fieldKey, category, fieldLabel} = action.payload;
      let _items = [...state];
      _items = _items.map(item => {
        if(item.category === category) {
          item.fields = item.fields.filter(field=> field.label !== fieldLabel);
    
        }
        return item
      })

      return _items;
    case "UPDATE_ITEM_FIELD":
      const { updates, addField, fieldType } = action.payload;
      const { text, type } = updates;
      let list = [...state];
      // Add a new Field.
      if (addField) {
        let ItemFields = list.find((item) => {
          return item.category === type;
        });
        ItemFields.fields.push({
          type: "text",
          value: "",
          label: ``,
        });
        return list;
      }
      // Update a Field.
      let fieldList = list.find((item) => item.category === type);

      if( !fieldList) return state;
      let attribute = fieldList && fieldList.fields.find((field) => {
        return field.label === text;
      });
      if (!attribute) {
        fieldList.fields.push({
          type: updates.value,
          value: "",
          label: ``,
        });

        return list;
      } else {
        if(!fieldType){
          attribute.label = updates.value;
        } else {
          attribute.type = updates.value;
        }
      }

      return list;
    case "UPDATE_ITEM":
      // Update Item by id.
      const { value, label, id } = action.payload;
      const newItems = [...state];
      const item = newItems.filter((item) => item.id === id)[0];
      const field = item.fields.find((field) => field.label === label);
      field["value"] = value;
      return [...newItems];
    default:
      return state;
  }
};

export default reducer;
