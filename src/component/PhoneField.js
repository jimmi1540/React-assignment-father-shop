import React from 'react';
import { MuiTelInput } from 'mui-tel-input';
import './PhoneField.css';
const PhoneField = () => {
  const inputStyle = {
    width: '340px',
    border: 'none', 
    outline: 'none', 
    boxShadow: 'none',
    borderRadius: '0', 
    backgroundColor: '#f4f4f4',
    marginTop:'0px',
  };



  const [value, setValue] = React.useState('+92');

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <MuiTelInput
      value={value}
      onChange={handleChange}
      inputProps={{ style: inputStyle }}
    />
  );
};

export default PhoneField;
