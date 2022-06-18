import { Input } from "semantic-ui-react";
import { StyledField } from "./index.styled";

export const DatePicker = ({ value, label, onChangeHandler, id }) => {
  return (
    <StyledField>
      <Input
        type="date"
        label={label}
        focus
        onChange={(event, data) => onChangeHandler(event, data, id)}
        value={value}
      />
    </StyledField>
  );
};

export const TextInput = ({ value, label, onChangeHandler, id }) => {
  return (
    <StyledField>
      <Input
        label={label}
        focus
        type="text"
        value={value}
        onChange={(event, data) => onChangeHandler(event, data, id)}
      />
    </StyledField>
  );
};

export const NumberInput = ({ value, label, onChangeHandler, id }) => {
  return (
    <StyledField>
      <Input
        label={label}
        focus
        onChange={(event, data) => onChangeHandler(event, data, id)}
        type="number"
        value={value}
      />
    </StyledField>
  );
};
