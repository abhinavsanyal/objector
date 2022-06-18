import React from "react";
import { TextInput, DatePicker, NumberInput } from "../Common/inputFields";
import {
  ItemWrapper,
  ItemField,
  ItemCard,
  RemoveIcon,
} from "./ItemList.styled";
import { useSelector, useDispatch } from "react-redux";

const options = [
  {
    key: "Jenny Hess",
    text: "Jenny Hess",
    value: "Jenny Hess",
  },
  {
    key: "Elliot Fu",
    text: "Elliot Fu",
    value: "Elliot Fu",
  },
];

export const ItemList = () => {
  const { items } = useSelector((state) => state);
  const dispatch = useDispatch();

  // Action dispatchers for item crud.
  const addItem = (newItem) => {
    dispatch({ type: "ADD_ITEM", payload: newItem });
  };
  const updateItem = (newItems) => {
    dispatch({ type: "UPDATE_ITEM", payload: newItems });
  };
  const removeItem = (removeId) => {
    dispatch({ type: "REMOVE_ITEM", payload: removeId });
  };

  const onChangeHandler = (e, data, id) => {
    const { value, label } = data;
    updateItem({ value, label, id });
  };
  return (
    <ItemWrapper>
      {items.map((item, index) => {
        return (
          <ItemCard key={index}>
            <RemoveIcon
              id="remove"
              onClick={() => {
                removeItem(item.id);
              }}
            >
              {" "}
              X{" "}
            </RemoveIcon>
            <Item
              fields={item.fields}
              id={item.id}
              onChangeHandler={onChangeHandler}
            />
          </ItemCard>
        );
      })}
    </ItemWrapper>
  );
};

const fieldSelector = (type, key, value, label, onChangeHandler, id) => {
  switch (type) {
    case "text":
      return (
        <TextInput
          key={key}
          value={value}
          label={label}
          onChangeHandler={onChangeHandler}
          id={id}
        />
      );
    case "date":
      return (
        <DatePicker
          key={key}
          value={value}
          label={label}
          onChangeHandler={onChangeHandler}
          id={id}
        />
      );
    case "number":
      return (
        <NumberInput
          key={key}
          value={value}
          label={label}
          onChangeHandler={onChangeHandler}
          id={id}
        />
      );
    default:
      return (
        <TextInput
          key={key}
          value={value}
          label={label}
          onChangeHandler={onChangeHandler}
          id={id}
        />
      );
  }
};

export const Item = ({ fields, onChangeHandler, id }) => {
  return (
    <ItemField>
      {fields.map((field, index) => {
        const { type, value, label } = field;
        return fieldSelector(type, index, value, label, onChangeHandler, id);
      })}
    </ItemField>
  );
};
