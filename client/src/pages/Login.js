<<<<<<< HEAD
import TextInput from '../atoms/TextInput';
import Form from '../molecules/Form';
=======
import Input from "../atoms/Inputs";
import Form from "../atoms/Form";
import RefLink from "../atoms/RefLink";
>>>>>>> fc2ba92191306ea156c3009385648fb1ad60ddf4
import { useForm } from "react-hook-form";
import './css/Login.css';

const Login = () => {
  const { register } = useForm();
<<<<<<< HEAD
  const onSubmit = (data) => console.log(data);
  return (
    <Form onSubmit={onSubmit}>
      <TextInput register={register} placeholder="Email Address" name="email" />
      <TextInput register={register} placeholder="Password" name="password" />
      <TextInput register={register} type="submit" value="Login" />
    </Form>
    // <div className="container">
    //   <div className="login">
    //     <h2>Login into MarkBib</h2>
    //     <Form onSubmit={onSubmit}>
    //       <label className="MedMedium">Please enter your email address</label>
    //       <TextInput register={register} placeholder="Email Address" name="email" />
    //       <label className="MedMedium">Please enter your password</label>
    //       <TextInput register={register} placeholder="Password" name="password" />
    //       <TextInput register={register} type="submit" value="Login" />
    //     </Form>
    //   </div>
    // </div>
    // <div className="container">
    //   <div className="login">
    //     <h2> Login into MarkBib </h2>
    //     <form>
    //       <label className="MedMedium"> Please enter your email address </label>
    //       { <TextInput placeholder="Email Address"/> }
    //       <label className="MedMedium"> Please enter your password </label>
    //       {<TextInput placeholder="Password"/>}
    //       {<LargeButton label="Login"/>}
    //     </form>
    //     <RefLink path="/recovery" text="Forgot Password?"/>
    //     <RefLink path="/signup" text="Don't have an account? Sign up"/>
    //   </div>
    // </div> 
=======
  const onSubmit = data => console.log(data);

  return (
    <div className="login">
      <Form onSubmit={onSubmit}>
        <Input label="Please enter your email address" register={register} placeholder="E-mail Address" name="email" />
        <Input label="Please enter your password" register={register} placeholder="Password" name="password" />
        <Input name="button" type="submit" value="Login" register={register}/>
      </Form>
      <RefLink path="/recovery" text="Forgot password"/>
      <RefLink path="/signup" text="Create an account"/>
    </div>


>>>>>>> fc2ba92191306ea156c3009385648fb1ad60ddf4
  );
}
 
export default Login;