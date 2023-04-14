import Input from "../atoms/Input";
import Form from "../atoms/Form";
import RefLink from "../atoms/RefLink";
import { useForm } from "react-hook-form";
import './css/Login.css';

const Login = () => {
  const { register } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="container">
      <div className="login">
        <h1>Login into MarkBib</h1>
        <Form className="user-form" onSubmit={onSubmit}>
          <Input className="text-input" type="email" label="Please enter your email address" register={register} placeholder="E-mail Address" name="email" />
          <Input className="text-input" type="password" label="Please enter your password" register={register} placeholder="Password" name="password" />
          <div className="btn-container">
            <Input className="submit-btn" name="button" type="submit" value="Login" register={register}/>
          </div>
        </Form>
        <RefLink className="ref-link" path="/recovery" text="Forgot password"/>
        <RefLink className="ref-link" path="/signup" text="Create an account"/>
      </div>
    </div>
  );
}
 
export default Login;