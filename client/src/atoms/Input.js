import React from "react";

const Input = ( { label, register, name, ...props} ) => {
  return (
    <>
      <label> {label} </label>
      <input {...register(name, {required:true})}  {...props} />
    </>
  );
}
 
export default Input;