import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { ItemList } from "./ItemList";
import AddItemButton from "./AddItemButton";
import {
  FLEX_POSITION_OPTIONS,
  FLEX_WRAP_OPTIONS,
  FlexContainer,
  FlexItem,
} from "../Common/styles";

const PageSelector = () => {
  const { items, categories } = useSelector((state) => state);
  const [path, setPath] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    let match = pathname.split("/").pop();
    setPath(match);
    if (match === "All" || match === "") {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }, [pathname]);

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

  const filterItems = () => {
    let filteredList = items;
    if (path === "All" || path === "") {
      // Filter lists that have fields.
      return filteredList.filter((item) => {
        let fields = item.fields;
        return fields.length > 0;
      });
    } else {
      // Filter by category
      filteredList = filteredList.filter((item) => item.category === path);
      // Filter lists that have fields.
      return filteredList.filter((item) => {
        let fields = item.fields;
        return fields.length > 0;
      });
    }
  };

  const renderSelectedPage = () => {
    console.log("Render: PageSelector");
    return (
      <FlexContainer
        justify={FLEX_POSITION_OPTIONS.center}
        align={FLEX_POSITION_OPTIONS.unset}
        wrap={FLEX_WRAP_OPTIONS.reverse}
      >
        <FlexItem
          justify={FLEX_POSITION_OPTIONS.end}
          // align={FLEX_POSITION_OPTIONS.unset}
          width={1}
        >
          <ItemList
            items={filterItems()}
            updateItem={updateItem}
            removeItem={removeItem}
          />
        </FlexItem>
        <FlexItem
          justify={FLEX_POSITION_OPTIONS.start}
          align={FLEX_POSITION_OPTIONS.baseline}
          width={0.4}
        >
          <FlexContainer justify={FLEX_POSITION_OPTIONS.start}>
            <FlexItem>
              <AddItemButton
                showDropdown={showDropdown}
                category={!showDropdown && path}
                categories={categories}
                addItem={addItem}
              />
            </FlexItem>
          </FlexContainer>
        </FlexItem>
      </FlexContainer>
    );
  };

  return renderSelectedPage();
};

export default PageSelector;
