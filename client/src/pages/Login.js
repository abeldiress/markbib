import TextInput from '../atoms/TextInput';
import Form from '../molecules/Form';
import { useForm } from "react-hook-form";
import './css/Login.css';

const Login = () => {
  const { register } = useForm();
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
  );
}
 
export default Login;