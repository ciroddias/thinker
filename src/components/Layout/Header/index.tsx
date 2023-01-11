import Image from "next/image";
import Link from "next/link";
import { Container, NavWrapper, SearchBarWrapper, Thinker } from "./styles";
import { FaLightbulb } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

function Header() {
  return (
    <Container>
      <Thinker>
        <FaLightbulb size={25} color="#fff" />
        <h1>thinker</h1>
      </Thinker>
      <SearchBarWrapper>
        <AiOutlineSearch size={20} />
        <input placeholder="Search topic" />
      </SearchBarWrapper>
      <NavWrapper>
        <Link href="/discussions">Discussions</Link>
        <Link href="/">Home</Link>
        <Link href="/signup">Sair</Link>
      </NavWrapper>
    </Container>
  );
}

export { Header };
