import { Input } from "semantic-ui-react";
import {StyledField} from "./index.styled";

export const DatePicker = ({ value, label }) => {
  return <StyledField><Input type="date" label={label} focus value={value} /></StyledField>;
};

export const TextInput = ({ value, label }) => {
  return <StyledField><Input label={label} focus type="text" value={value} /></StyledField>;
};

export const NumberInput = (props) => {
  return <StyledField><Input label={props.label} focus type="number" value={props.value} /></StyledField>;
};
