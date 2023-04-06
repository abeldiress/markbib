<<<<<<< HEAD
import TextInput from '../atoms/TextInput';
import RefLink from '../atoms/RefLink';
=======
import Form from '../atoms/Form';
import Input from '../atoms/Inputs';
import { useForm } from "react-hook-form";
import RefLink from '../atoms/RefLink'
>>>>>>> fc2ba92191306ea156c3009385648fb1ad60ddf4

const Signup = () => {
  const { register } = useForm();
  const onSubmit = data => console.log(data);
  return ( 
    <div className="signup">
      <h2> Create an Account </h2>
<<<<<<< HEAD
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
=======
      <Form onSubmit={onSubmit}>
        <Input label="Please enter your name" register={register} placeholder="Name" name="name" />
        <Input label="Please enter your email address" register={register} placeholder="E-mail Address" name="email" />
        <Input label="Please enter your password" register={register} placeholder="Password" name="password" />
        <Input label="Please confirm your password" register={register} placeholder="Confirm Password" name="confirmPassword" />
        <Input register={register} name="button" type="submit" value="Create Account" />
      </Form>
>>>>>>> fc2ba92191306ea156c3009385648fb1ad60ddf4
        <RefLink path="/login" text="Already have an account? Log in"/>
    </div>
     );
}
 
export default Signup;