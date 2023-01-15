import { ChangeEvent, FormEvent } from "react";
import { Inter } from "@next/font/google";
import { useState } from "react";
import { Actions, Container, LoginCard, Logo } from "./styles";
import { signin } from "../src/service/api";

const inter = Inter({ subsets: ["latin"] });

interface ISigninForm {
  email: string;
  password: string;
}

export default function Signin() {
  const [form, setForm] = useState<ISigninForm>({ email: "", password: "" });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const name = event.target.name;
    const value = event.target.value;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  }

  async function handleSignin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await signin({
      email: form.email,
      password: form.password,
    });
  }

  return (
    <Container>
      <Logo>th!nker</Logo>
      <LoginCard onSubmit={handleSignin}>
        <strong>Entrar</strong>
        <input name="email" placeholder="Email" onChange={handleInputChange} />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleInputChange}
        />
        <Actions>
          <button type="submit">Entrar</button>
          <a>Esqueci a senha</a>
        </Actions>
      </LoginCard>
    </Container>
  );
}
