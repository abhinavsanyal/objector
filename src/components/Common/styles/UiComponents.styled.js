import styled from "styled-components";

export const FLEX_POSITION_OPTIONS = {
    center: "center",
    start: "flex-start",
    end: "flex-end",
    space_between: "space-between",
    space_around: "space-around",
    space_even: "space-evenly",
    unset: "unset",
    baseline: "baseline"
}

export const FLEX_WRAP_OPTIONS = {
    nowrap: "nowrap",
    wrap: "wrap",
    reverse: "wrap-reverse"
}
export const FLEX_DIRECTIONS = {
    row: "row",
    column: "column"
}

export const FlexContainer = styled.div`
    display: flex;
    justify-content: ${({justify})=>justify?justify:`center`};
    align-items: ${({align})=>align?align:`center`};
    flex-direction: ${({direction})=>direction?direction:`row`};
    flex-wrap: ${({wrap})=>wrap?wrap:`wrap`};
`;

export const FlexItem = styled.div`
    display:flex;
    flex: ${({width})=>width?width:1};
    justify-content: ${({justify})=>justify?justify:`center`};
    align-items: ${({align})=>align?align:`center`};
    padding: ${({padding})=>padding?padding:0}px;
    margin: ${({margin})=>margin?margin:0}px;
`;

export const Button = styled.button`
  background: grey;
`;

