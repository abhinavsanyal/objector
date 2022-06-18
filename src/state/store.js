import { configureStore } from "@reduxjs/toolkit";

import reducers from "./reducers";

const initialState = {
  categories: ["ChainSaws", "Bulldozers"],
  categorySchema: {
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
  },
  items: [
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
      category: "Bulldozer",
      id: "Bulldozer 1",
      fields: [
        { type: "text", value: "Bulldozer 1", label: "Model" },
        { type: "text", value: "Electric", label: "Type" },
        { type: "text", value: "A1", label: "Grade" },
        { type: "number", value: 123, label: "Bar length" },
        { type: "text", value: "Chain saw 1", label: "Brand" },
        { type: "date", value: "Chain saw 1", label: "Build Date" },
        { type: "number", value: 10, label: "Quantity" },
      ],
    },
  ],
};

const store = configureStore({
  reducer: reducers,
});

export default store;
// preloadedState: initialState
