import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { ItemList } from "./ItemList";
import AddItemButton from "./AddItemButton";
import { PageWrapper } from "./PageSelector.styled";

const PageSelector = ({ filter }) => {
  const { items, categories } = useSelector((state) => state);
  const [path, setPath] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    let match = pathname.split("/").pop()
    setPath(match);
    if(match ==="All" || match === "") {

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
    if(path ==="All" || path === "") {
      return items;
    } 
    return items.filter((item) => item.category === path)
  };

  const renderSelectedPage = () => {
    return (
      <PageWrapper>
        <ItemList
          items={filterItems()}
          updateItem={updateItem}
          removeItem={removeItem}
        />
        <AddItemButton showDropdown={showDropdown} category={!showDropdown && path} categories={categories} addItem={addItem} />
      </PageWrapper>
    );
  };

  return renderSelectedPage();
};

export default PageSelector;
