import { Content } from "./styles";
import { Header } from "./Header";
import { useAuth } from "../../hooks/useAuth";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const { auth } = useAuth();
  return auth ? (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  ) : (
    <>{children}</>
  );
}

export { Layout };
