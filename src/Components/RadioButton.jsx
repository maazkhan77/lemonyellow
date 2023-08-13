import React from "react";
import Form from "react-bootstrap/Form";

const RadioButtonGroup = ({ options, selectedOption, onChange }) => {
  return (
    <Form>
      {options.map((option) => (
        <Form.Check
          key={option.value}
          type="radio"
          label={option.label}
          name="options"
          id={option.value}
          value={option.value}
          checked={selectedOption === option.value}
          onChange={onChange}
        />
      ))}
    </Form>
  );
};

export default RadioButtonGroup;
