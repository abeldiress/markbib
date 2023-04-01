import Form from '../atoms/Form';
import Input from '../atoms/Inputs';
import { useForm } from "react-hook-form";
import RefLink from '../atoms/RefLink'

const Signup = () => {
  const { register } = useForm();
  const onSubmit = data => console.log(data);
  return ( 
    <div className="signup">
      <h2> Create an Account </h2>
      <Form onSubmit={onSubmit}>
        <Input label="Please enter your name" register={register} placeholder="Name" name="name" />
        <Input label="Please enter your email address" register={register} placeholder="E-mail Address" name="email" />
        <Input label="Please enter your password" register={register} placeholder="Password" name="password" />
        <Input label="Please confirm your password" register={register} placeholder="Confirm Password" name="confirmPassword" />
        <Input register={register} name="button" type="submit" value="Create Account" />
      </Form>
        <RefLink path="/login" text="Already have an account? Log in"/>
    </div>
     );
}
 
export default Signup;