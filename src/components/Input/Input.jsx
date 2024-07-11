import React from "react";
 const Input = ({ value, onChange }) => (
  <input type="text" value={value} onChange={onChange} placeholder="add details" style={{width:'70%',height:'30px',paddingLeft:'1%',borderRadius:'10px',border:'1px solid grey'}}/>
);
export default Input