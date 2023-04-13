import Form from '../atoms/Form';
import Input from '../atoms/Input';
import { useForm } from "react-hook-form";
import RefLink from '../atoms/RefLink';
import './css/Signup.css';

const Signup = () => {
  const { register } = useForm();
  const onSubmit = data => console.log(data);
  return ( 
    <div className="container">
      <div className="signup">
        <h1>Create an account</h1>
        <Form className="user-form" onSubmit={onSubmit}>
          <Input className="text-input" type="email" label="Please enter your name" register={register} placeholder="First and Last name" name="name"/>
          <Input className="text-input" label="Please enter your email address" register={register} placeholder="E-mail Address" name="email" />
          <Input className="text-input" type="password" label="Please enter your password" register={register} placeholder="Password" name="password" />
          <Input className="text-input" type="password" label="Please confirm your password" register={register} placeholder="Confirm Password" name="confirm-password" />
          <div className="btn-container">
            <Input className="submit-btn" name="button" type="submit" value="Create account" register={register}/>
          </div>
        </Form>
        <RefLink className="ref-link" path="/login" text="Already have an account? Login."/>
      </div>
    </div>
  );
}
export default Signup;