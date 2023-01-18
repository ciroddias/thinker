import { ChangeEvent, FormEvent } from "react";
import { Inter } from "@next/font/google";
import { useState } from "react";
import { Actions, Container, LoginCard, Logo } from "./styles";
import { signin } from "../../src/service/api";
import { useAuth } from "../../src/hooks/useAuth";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

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
    const { username, password } = form;
    console.log({ username, password });
    const { status, message } = await signin({
      username,
      password,
    });

    if (message) {
      toast.error(message);
    }

    if (status === 200) {
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
          name="username"
          placeholder="username"
          onChange={handleInputChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleInputChange}
        />
        <Actions>
          <button type="submit">Login</button>
          <div>
            <a>Forgot password</a>
            <a onClick={() => router.push("/signup")}>Don't have account</a>
          </div>
        </Actions>
      </LoginCard>
    </Container>
  );
}
