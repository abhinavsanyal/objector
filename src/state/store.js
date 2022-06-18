import { configureStore } from "@reduxjs/toolkit";

import reducers from "./reducers";

const initialState = {
    categories : ["ChainSaws","Bulldozers"],
    categorySchema : {
      ChainSaws : [
        {fieldType:"text", fieldText: "Model", key: "model", component: "dropdown"},
        {fieldType:"text", fieldText: "Type", key: "type", component: "dropdown"},
        {fieldType:"text", fieldText: "Grade", key: "grade", component: "dropdown"},
        {fieldType:"number", fieldText: "Bar Length", key: "barLength", component: "number"},
        {fieldType:"text", fieldText: "Brand", key: "brand", component: "dropdown"},
        {fieldType:"date", fieldText: "Build Date", key: "buildDate", component: "datePicker"},
        {fieldType:"number", fieldText: "Quantity", key: "quantity", component: "number"},
      ],
      Bulldozers : [
        {fieldType:"text", fieldText: "Model", key: "model", component: "dropdown"},
        {fieldType:"text", fieldText: "Power Net", key: "power_net", component: "dropdown"},
        {fieldType:"text", fieldText: "Operating Weight", key: "operatingWeight", component: "dropdown"},
        {fieldType:"text", fieldText: "Brand", key: "brand", component: "dropdown"},
        {fieldType:"date", fieldText: "Build Date", key: "builDate", component: "datePicker"},
        {fieldType:"number", fieldText: "Quantity", key: "quantity", component: "number"},
      ]
    },
    items : [
      {
        category: "ChainSaws",
        fields: [ 
          { Model: "Chain saw 1",
          Type: "Electric",
          Grade: "A",
          BarLength: 112,
          Brand : "turbo",
          BuildDate : 213414,
          Quantity : 10}
        ]
    }
    ]
  }
  
const store = configureStore({
    reducer : (state) => {
        return state;
    },
    preloadedState: initialState
})

export default store;