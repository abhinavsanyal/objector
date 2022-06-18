const initialState = {
  ChainSaws: [
    {
      fieldType: "text",
      fieldText: "Model",
      key: "model",
      component: "dropdown",
    },
    {
      fieldType: "text",
      fieldText: "Type",
      key: "type",
      component: "dropdown",
    },
    {
      fieldType: "text",
      fieldText: "Grade",
      key: "grade",
      component: "dropdown",
    },
    {
      fieldType: "number",
      fieldText: "Bar Length",
      key: "barLength",
      component: "number",
    },
    {
      fieldType: "text",
      fieldText: "Brand",
      key: "brand",
      component: "dropdown",
    },
    {
      fieldType: "date",
      fieldText: "Build Date",
      key: "buildDate",
      component: "datePicker",
    },
    {
      fieldType: "number",
      fieldText: "Quantity",
      key: "quantity",
      component: "number",
    },
  ],
  Bulldozers: [
    {
      fieldType: "text",
      fieldText: "Model",
      key: "model",
      component: "dropdown",
    },
    {
      fieldType: "text",
      fieldText: "Power Net",
      key: "power_net",
      component: "dropdown",
    },
    {
      fieldType: "text",
      fieldText: "Operating Weight",
      key: "operatingWeight",
      component: "dropdown",
    },
    {
      fieldType: "text",
      fieldText: "Brand",
      key: "brand",
      component: "dropdown",
    },
    {
      fieldType: "date",
      fieldText: "Build Date",
      key: "builDate",
      component: "datePicker",
    },
    {
      fieldType: "number",
      fieldText: "Quantity",
      key: "quantity",
      component: "number",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      return state;
    default:
      return state;
  }
};

export default reducer;
