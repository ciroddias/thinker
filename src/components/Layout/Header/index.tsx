import Image from "next/image";
import Link from "next/link";
import { Container, NavWrapper } from "./styles";

function Header() {
  return (
    <Container>
      <Image src="" alt="" />
      <NavWrapper>
        <Link href="">Home</Link>
        <Link href="">Sair</Link>
      </NavWrapper>
    </Container>
  );
}

export { Header };
