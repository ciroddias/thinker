import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { singnup } from "../../service/api";
import { Container, Form } from "./styles";

interface ISignupForm {
  username: string;
  password: string;
  repeatPassword: string;
}

export default function Signup() {
  const [form, setForm] = useState<ISignupForm>({} as ISignupForm);
  let router = useRouter();

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const name = event.target.name;
    const value = event.target.value;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  }

  async function handleSignup(e: FormEvent<HTMLFormElement>) {
    const { username, password, repeatPassword } = form;

    if (password !== repeatPassword) {
      return toast.error("Your passwords do not match!");
    }

    const response = await singnup({
      username,
      password,
    });

    if (response.status !== 200) {
      toast.error(response.message);
    }

    router.push("/");
  }

  return (
    <Container>
      <h1>Let's create an account !</h1>
      <Form onSubmit={handleSignup}>
        <input
          name="username"
          placeholder="Enter your username"
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="repeatPassword"
          placeholder="Repeat your password"
          onChange={handleInputChange}
        />
        <button type="submit">think!</button>
      </Form>
    </Container>
  );
}
