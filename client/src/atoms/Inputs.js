import React from "react";

const Input = ( { label, register, name, ...rest} ) => {
  return (
  <>
    <label> {label} </label>
    <input {...register(name, {required:true})}  {...rest} />
  </>

  );
}
 
export default Input;