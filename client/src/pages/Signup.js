import LargeButton from '../atoms/LargeButton';
import TextInput from '../atoms/TextInput';

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
                {<LargeButton label="Create Account" />}
            </form>
        </div>
     );
}
 
export default Signup;