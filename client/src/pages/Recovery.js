<<<<<<< HEAD
import TextInput from '../atoms/TextInput';
=======
import Input from '../atoms/Inputs';
import Form from '../atoms/Form';
import { useForm } from "react-hook-form";
>>>>>>> fc2ba92191306ea156c3009385648fb1ad60ddf4

const Recovery = () => {
  const { register } = useForm();
  const onSubmit = data => console.log(data);
  return (  
    <div className="recovery">
      <h2> Reset Password </h2>
<<<<<<< HEAD
        <form>
          <label> Please enter the email address of your account </label>
          <TextInput placeholder="Email address"/>
        </form>
=======
        <Form onSubmit={onSubmit}>
          <Input label="Please enter your email address"  register={register} placeholder="Email address" name="email"/>
          <Input register={register} name="button" type="submit" value="Confirm" />
        </Form>
>>>>>>> fc2ba92191306ea156c3009385648fb1ad60ddf4
    </div>
  );
}

export default Recovery;