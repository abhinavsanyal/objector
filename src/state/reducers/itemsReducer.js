const initialState = [
  {
    category: "ChainSaws",
    id: "ChainSaw 1",
    fields: [
      { type: "text", value: "Chain saw 1", label: "Model" },
      { type: "text", value: "Electric", label: "Type" },
      { type: "text", value: "A1", label: "Grade" },
      { type: "number", value: 123, label: "Bar length" },
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
      { type: "text", value: "A1", label: "Grade" },
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
      items.push(action.payload);
      return items;
    case "REMOVE_ITEM":
      // Remove an item from inventory by id.
      const updatedList = state.filter((item) => item.id !== action.payload);
      return updatedList;
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
