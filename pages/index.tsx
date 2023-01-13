import { Inter } from "@next/font/google";
import { Container, LoginCard } from "./styles";

const inter = Inter({ subsets: ["latin"] });

export default function Signin() {
  return (
    <Container>
      <LoginCard>
        <strong>Entrar</strong>
        <input placeholder="Email" />
        <input placeholder="Password" />
        <small>Esqueci a senha</small>
      </LoginCard>
    </Container>
  );
}
