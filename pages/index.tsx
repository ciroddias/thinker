import { ChangeEvent, FormEvent } from "react";
import { Inter } from "@next/font/google";
import { useState } from "react";
import { Actions, Container, LoginCard, Logo } from "./styles";
import { signin } from "../src/service/api";
import { useAuth } from "../src/hooks/useAuth";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

interface ISigninForm {
  username: string;
  password: string;
}

export default function Signin() {
  const [form, setForm] = useState<ISigninForm>({ username: "", password: "" });
  const { authenticate } = useAuth();
  let router = useRouter();

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const name = event.target.name;
    const value = event.target.value;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  }

  async function handleSignin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await signin({
      username: form.username,
      password: form.password,
    });

    if (response.status === 200) {
      authenticate();
      router.push("/discussions");
    }
  }

  return (
    <Container>
      <Logo>th!nker</Logo>
      <LoginCard onSubmit={handleSignin}>
        <strong>Entrar</strong>
        <input
          name="usermame"
          placeholder="usermame"
          onChange={handleInputChange}
        />
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
