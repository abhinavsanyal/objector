import React from "react";
import { TextInput, DatePicker, NumberInput } from "../../Common/inputFields";
import {
  ItemField,
  InlineText,
  StyledFlexContainer,
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

export const Item = ({ fields, onChangeHandler, nameNewCategory, id }) => {
  return (
    <div>
      <ItemField>
        <TextInput
          value={id}
          label={"Object Type"}
          id={id}
          onChangeHandler={(event, data) => {
            const { value, text, type } = data;
            nameNewCategory(value, id);
          }}
        />
        {fields &&
          fields.length &&
          fields.map((field, index) => {
            return (
              <StyledFlexContainer>
                <InlineText>
                  <TextInput
                    key={index}
                    value={field.fieldText}
                    onChangeHandler={(event, data) => {
                      const { value, text, type } = data;
                      onChangeHandler(id, { value }, field.fieldText);
                    }}
                    id={id}
                  />
                </InlineText>

                <Dropdown
                  inline
                  options={fieldOptions}
                  value={field.fieldType}
                  onChange={(event, data) => {
                    onChangeHandler(id, data, field.fieldText, id, true);
                  }}
                />
              </StyledFlexContainer>
            );
          })}
      </ItemField>
    </div>
  );
};
