import Input from "../atoms/Inputs";
import Form from "../atoms/Form";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Form onSubmit={onSubmit}>
        <Input register={register} id="1" placeholder="E-mail Address" name="email" />
    </Form>

  );
}
 
export default Login;