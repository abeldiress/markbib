import TextInput from '../atoms/TextInput';
import RefLink from '../atoms/RefLink';

const Signup = () => {
  return ( 
    <div className="signup">
      <h2> Create an Account </h2>
      <form>
        <label> Please enter your name </label>
          { <TextInput placeholder="Name"/> }
          <label> Please enter your email address </label>
          { <TextInput placeholder="Email Address"/> }
          <label> Please enter your password </label>
          { <TextInput placeholder="Password"/> }
          <label> Please confirm your password </label>
          { <TextInput placeholder="Confirm Password"/> }
        </form>
        <RefLink path="/login" text="Already have an account? Log in"/>
    </div>
     );
}
 
export default Signup;