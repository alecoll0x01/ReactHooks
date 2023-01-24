import { FormControl, FormControlLabel } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import React, { useState } from 'react';

const checkboxes = [
  { label: "Label 1", value: "value1" },
  { label: "Label 2", value: "value2" },
  { label: "Label 3", value: "value3" },
  { label: "Label 4", value: "value4" },
  { label: "Label 5", value: "value5" },
  { label: "Label 6", value: "value6" },
  { label: "Label 7", value: "value7" },
  { label: "Label 8", value: "value8" },
  { label: "Label 9", value: "value9" },
  { label: "Label 10", value: "value10" }
]

function MyForm() {
  const [formData, setFormData] = useState({
    checkboxes: Array(10).fill(false),
  });

  const handleCheckboxChange = (e) => {
    const updatedCheckboxes = [...formData.checkboxes];
    updatedCheckboxes[e.target.name] = e.target.checked;
    setFormData({ ...formData, checkboxes: updatedCheckboxes });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let selectedCheckbox = formData.checkboxes.map((checkbox, index) => {
      if (checkbox) return checkboxes[index];
    });
    let selectedItems = selectedCheckbox.filter(Boolean);
    let postData = {
      selectedCheckboxes: selectedItems
    };
    // send postData to API here
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        {checkboxes.map((checkbox, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                name={index}
                checked={formData.checkboxes[index]}
                onChange={handleCheckboxChange}
                value={checkbox.value}
              />
            }
            label={checkbox.label}
          />
        ))}
        <button type="submit">Submit</button>
      </FormControl>
    </form>
  );
}

export default MyForm;
