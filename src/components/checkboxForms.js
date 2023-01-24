import { Checkbox, FormControl, FormControlLabel } from "@material-ui/core";
import React, { useState } from "react";

const CheckboxForm = () => {
  const [checkboxValues, setCheckboxValues] = useState([
    { label: "Label 1", value: false },
    { label: "Label 2", value: false },
    { label: "Label 3", value: false },
    { label: "Label 4", value: false },
    { label: "Label 5", value: false },
    { label: "Label 6", value: false },
    { label: "Label 7", value: false },
    { label: "Label 8", value: false },
    { label: "Label 9", value: false },
    { label: "Label 10", value: false }
  ]);

  const handleChange = (event) => {
    const updatedCheckboxes = checkboxValues.map((checkbox) => {
      if (checkbox.label === event.target.name) {
        return { ...checkbox, value: event.target.checked };
      }
      return checkbox;
    });
    setCheckboxValues(updatedCheckboxes);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Make API call here with checkboxValues as the payload
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        {checkboxValues.map((checkbox, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={checkbox.value}
                onChange={handleChange}
                name={checkbox.label}
                value={checkbox.label}
              />
            }
            label={checkbox.label}
          />
        ))}
      </FormControl>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CheckboxForm;
