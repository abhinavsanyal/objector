import React from "react";
import { Button, Dropdown, Menu } from "semantic-ui-react";
import { DropdownWrapper } from "./AddItemButton.styled";
import { useSelector, useDispatch } from "react-redux";
import { FlexContainer, FLEX_DIRECTIONS, FLEX_POSITION_OPTIONS } from "../Common/styles";

const AddItemButton = ({ categories, addItem, showDropdown, category }) => {
  const { categorySchema, items } = useSelector((state) => state);

  const [isTypeSelected, setIsTypeSelected] = React.useState();
  const [selectedType, setSelectedType] = React.useState("Type");

  const categoryOptions = () =>
    categories.map((category, index) => {
      return { key: index, text: category, value: category };
    });

  const addItemHandler = () => {
    let schemaType = !showDropdown ? category : selectedType;
    let fields = categorySchema[schemaType];
    fields = fields.map((field) => {
      return { type: field.fieldType, value: "", label: field.fieldText };
    });
    addItem({
      category: schemaType,
      id: `${schemaType}_${items.length + 1}`,
      fields,
    });
  };

  console.log("Render: PageSelector");

  return (
    <FlexContainer direction={FLEX_DIRECTIONS.row} justify={FLEX_POSITION_OPTIONS.start} style={{margin:"2em"}} >
      <Button.Group  >
        <Button
          disabled={!showDropdown ? false : !isTypeSelected}
          onClick={() => {
            addItemHandler();
          }}
        >
          {`Add ${selectedType}`}
        </Button>
        {showDropdown && (
          <Dropdown
            className="button icon"
            floating
            trigger={<></>}
            closeOnEscape
            options={categoryOptions()}
            onChange={(event, data) => {
              if (data.value && data.value !== "") {
                setIsTypeSelected(true);
                setSelectedType(data.value);
              }
            }}
          />
        )}
      </Button.Group>
    </FlexContainer>
  );
};

export default AddItemButton;

{
  /* 
      <Button
        disabled={ !showDropdown ? false:!isTypeSelected}
        onClick={() => {
          addItemHandler();
        }}
      >
        { !showDropdown ? `Add ${category}`: `Add Item` }
      </Button>
      { showDropdown &&
      <Menu compact>
        <Dropdown
          placeholder="Choose a type"
          selection
          closeOnEscape
          options={categoryOptions()}
          onChange={(event, data) => {
            if (data.value && data.value !== "") {
              setIsTypeSelected(true);
              setSelectedType(data.value);
            }
          }}
          />
      </Menu> */
}
