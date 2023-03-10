import TextInput from '../atoms/TextInput';
import LargeButton from '../atoms/LargeButton';
import RefLink from '../atoms/RefLink';
import { useForm } from 'react-hook-form';

const Login = () => {

  const {register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }
  return ( 
    <div className="login">
      <h2> Login into MarkBib </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label> Please enter your email address </label>
            { <TextInput ref={register({required: true})} />}
            <label> Please enter your password </label>
            { <TextInput ref={register({required: true})} />}
            {<LargeButton label="Login"/>}
        </form>
        <RefLink path="/recovery" text="Forgot Password?"/>
        <RefLink path="/signup" text="Don't have an account? Sign up"/>
    </div>
  );
}
 
export default Login;