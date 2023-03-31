import React from "react";

const Input = ( { register, id, placeholder, name, ...rest} ) => {
  return (
    <input id={id} placeholder={placeholder} {...register(name, {required:true})}  {...rest} />
  );
}
 
export default Input;