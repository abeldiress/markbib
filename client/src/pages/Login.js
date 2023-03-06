import TextInput from '../atoms/TextInput';
import LargeButton from '../atoms/LargeButton';

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
        </div>
    );
}
 
export default Login;