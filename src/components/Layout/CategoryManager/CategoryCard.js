import React, { useEffect } from "react";
import { TextInput } from "../../Common/inputFields";
import {
  ItemField,
  InlineText,
  StyledFlexContainer,
  RemoveIcon,
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

export const Item = ({ fields, onChangeHandler, nameNewCategory, category, idx, removeCategoryField, categories }) => {
  return (
    <div>
      <ItemField>
        <TextInput
          value={categories[idx]}
          id={`${idx}`}
          key={`${idx}`}
          label={"Object Type"}
          onChangeHandler={(event, data) => {
            nameNewCategory(data.value,categories[idx],idx);
          }}
        />
        {
          fields &&
          fields.length > 0 ?
          fields.map((field, index) => {
            return (
              <div>
                <StyledFlexContainer fieldKey={field.key}>
                  <InlineText>
                    <TextInput
                      key={index}
                      value={field.fieldText}
                      onChangeHandler={(event, data) => {
                        const { value } = data;
                        onChangeHandler(category, { value }, field.fieldText, false);
                      }}
                      id={categories[idx]}
                    />
                  </InlineText>

                  <Dropdown
                    inline
                    options={fieldOptions}
                    value={field.fieldType}
                    onChange={(event, data) => {
                      onChangeHandler(categories[idx], data, field.fieldText,true);
                    }}
                  />
                <RemoveIcon
                  id={field.key}
                  onClick={(e) => {
                    e.preventDefault();
                    removeCategoryField({category:category,fieldKey: field.key, label: field.fieldText})
                  }}
                >
                  X
                </RemoveIcon>
                </StyledFlexContainer>
              </div>
            )
          }):null}
      </ItemField>
    </div>
  );
};
