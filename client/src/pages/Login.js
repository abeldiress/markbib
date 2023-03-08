import TextInput from '../atoms/TextInput';
import LargeButton from '../atoms/LargeButton';
import RefLink from '../atoms/RefLink';

const Login = () => {
  return ( 
    <div className="login">
      <h2> Login into MarkBib </h2>
        <form>
          <label> Please enter your email address </label>
            { <TextInput placeholder="Email Address"/> }
            <label> Please enter your password </label>
            { <TextInput placeholder="Password"/> }
            {<LargeButton label="Login"/>}
        </form>
        <RefLink path="/recovery" text="Forgot Password?"/>
        <RefLink path="/signup" text="Don't have an account? Sign up"/>
    </div>
  );
}
 
export default Login;