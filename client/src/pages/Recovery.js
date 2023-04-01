import Input from '../atoms/Inputs';
import Form from '../atoms/Form';
import { useForm } from "react-hook-form";

const Recovery = () => {
  const { register } = useForm();
  const onSubmit = data => console.log(data);
  return (  
    <div className="recovery">
      <h2> Reset Password </h2>
        <Form onSubmit={onSubmit}>
          <Input label="Please enter your email address"  register={register} placeholder="Email address" name="email"/>
          <Input register={register} name="button" type="submit" value="Confirm" />
        </Form>
    </div>
  );
}

export default Recovery;