import React from "react";
import { TextInput, DatePicker, NumberInput } from "../../Common/inputFields";
import {
  ItemField,
  InlineText,
  StyledFlexContainer
} from "./ManageCatergory.styled";
import { Dropdown } from "semantic-ui-react";

const fieldOptions = [
  {
    key: "1",
    text: "text",
    value: "text",
  },
  {
    key: "2",
    text: "number",
    value: "number",
  },
  {
    key: "3",
    text: "date",
    value: "date",
  },
];

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
    <div>
      <ItemField>
        <TextInput disabled value={id} label={"Object Type"} id={id} />
        {fields.map((field, index) => {
          return (
            <StyledFlexContainer>
              <InlineText> <TextInput
          key={index}
          value={field.fieldText}
          onChangeHandler={onChangeHandler}
          id={id}
        /></InlineText>

              <Dropdown
                inline
                options={fieldOptions}
                value={field.fieldType}
                onChange={(event, data) => {
                  console.log("#DATA:", data, field.fieldText);
                  onChangeHandler(id,data, field.fieldText, id);
                }}
              />
            </StyledFlexContainer>
          );
        })}
      </ItemField>
    </div>
  );
};
