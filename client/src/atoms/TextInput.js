const TextInput = ({placeholder}) => {
    return ( 
        <div className="text-input">
            <input
                type="text"
                required
                placeholder={placeholder}
            />
        </div>
     );
}
 
export default TextInput;