import Input from "../atoms/Inputs";
import Form from "../atoms/Form";
import RefLink from "../atoms/RefLink";
import { useForm } from "react-hook-form";
import './css/Login.css';

const Login = () => {
  const { register } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="login">
      <Form styleClassName="user-form" onSubmit={onSubmit}>
        <Input className="text-input" label="Please enter your email address" register={register} placeholder="E-mail Address" name="email" />
        <Input className="text-input" label="Please enter your password" register={register} placeholder="Password" name="password" />
        <Input name="button" type="submit" value="Login" register={register}/>
      </Form>
      <RefLink path="/recovery" text="Forgot password"/>
      <RefLink path="/signup" text="Create an account"/>
    </div>


  );
}
 
export default Login;