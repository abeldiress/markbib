import React from "react";

const TextInput = ({ register, placeholder, name, ...rest}) => {
  return (
    <input placeholder={placeholder} {...register(name, {required:true})}  {...rest} />
  );
}
 
export default TextInput;