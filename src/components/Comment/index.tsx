import dayjs from "dayjs";
import {
  Container,
  Content,
  Header,
  Interactions,
  Agreed,
  Deviated,
} from "./styles";
import { AiFillCheckCircle, AiOutlineBranches } from "react-icons/ai";
import { useTheme } from "styled-components";

interface CommentProps {
  username: string;
  createdAt: Date;
  text: string;
  agreed: boolean;
  agree: number;
  deviated: boolean;
  deviatedAmount: number;
}

function Comment({
  username,
  createdAt,
  text,
  agree,
  agreed,
  deviated,
  deviatedAmount,
}: CommentProps) {
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <strong>{username}</strong>
        <time>{dayjs(createdAt).fromNow()}</time>
      </Header>
      <Content>
        <p>{text}</p>
      </Content>
      <Interactions>
        <Agreed agreed={agreed}>
          <AiFillCheckCircle
            size={15}
            color={agreed ? theme.colors.secondary : ""}
          />
          {agree}
        </Agreed>
        <Deviated deviated={deviated}>
          <AiOutlineBranches
            size={15}
            color={deviated ? theme.colors.secondary : ""}
          />
          {deviatedAmount}
        </Deviated>
      </Interactions>
    </Container>
  );
}

export { Comment };
