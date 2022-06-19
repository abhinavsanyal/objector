import styled from "styled-components";
import { Icon } from "semantic-ui-react";

export const ItemWrapper = styled.div`
  display: flex;
  height: 100%;
  color: black;
  font-size: 14px;
  flex-flow: row wrap;
  justify-content: flex-start;
  margin-top: 30px;
`;
export const ItemField = styled.div`
  margin: 5px;
`;
export const Category = styled.div`
  position: absolute;
  top: -8px;
  left: -8px;
  background: navajowhite;
  padding 8px 15px;
  border-radius:7%;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

export const RemoveIcon = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background: white;
  border-radius: 50%;
  top: -0.8em;
  right: -0.8em;
  text-align: center;
  font-size: 12px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  opacity: 0;
  cursor: pointer;
`;
export const ItemCard = styled.div`
  background-color: #fff;
  margin: 12px 15px;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 25px 2px;
  position: relative;

  &:hover #remove {
    opacity: 1;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  height: 100%;
  color: black;
  font-size: 14px;
  margin-top: 30px;
`;
export const InlineText = styled.div`
  display: inline-block;
  margin: 0 8px;
`;
export const StyledFlexContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center
`;
export const AddField = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: center;
  color: white;
  align-items: center;
  background: #3f3f4e;
  margin: 15px 15px;
  border-radius: 0.2em;
  padding: 0.5em 2em;
  cursor: pointer;
  height: 2em;
  max-width: 20em;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;
