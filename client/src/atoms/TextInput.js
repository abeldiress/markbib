const TextInput = ({ref}) => {
  return ( 
    <div className="text-input">
      <input
        type="text"
        ref={ref}
      />
    </div>
  );
}
 
export default TextInput;