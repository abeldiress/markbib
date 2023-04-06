import TextInput from '../atoms/TextInput';

const Recovery = () => {
  return (  
    <div className="recovery">
      <h2> Reset Password </h2>
        <form>
          <label> Please enter the email address of your account </label>
          <TextInput placeholder="Email address"/>
        </form>
    </div>
  );
}

export default Recovery;