import {
  BestReplyLabel,
  CommentField,
  Container,
  Content,
  Interactions,
  Interest as InterestStyles,
  Replies,
} from "./styles";
import { Header } from "./styles";
import { AiFillEye, AiOutlineComment } from "react-icons/ai";
import { useTheme } from "styled-components";
import { Comment as BestReply } from "../Comment";
import dayjs from "dayjs";
import { IReply } from "../../interfaces/IReply";
import { IInterest } from "../../interfaces/IInterest";

interface PostProps {
  username: string;
  text: string;
  createdAt: Date;
  interest: IInterest[];
  interested: boolean;
  replies: IReply[];
}

function Post({
  username,
  text,
  createdAt,
  interest,
  interested,
  replies,
}: PostProps) {
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
        <InterestStyles interested={interested}>
          <AiFillEye
            size={20}
            color={interested ? theme.colors.secondary : ""}
          />
          {interest.length}
        </InterestStyles>
        <Replies>
          <AiOutlineComment size={20} />
          {replies.length}
        </Replies>
      </Interactions>
      <BestReplyLabel>Best reply</BestReplyLabel>
      {replies.map((reply) => (
        <BestReply
          key={reply.id}
          username={reply.user.username}
          createdAt={reply.createdAt}
          text={reply.text}
          agreed={false}
          agree={reply.agree}
          deviated={false}
          deviatedAmount={reply.deviated}
        />
      ))}
      <CommentField placeholder="Please, keep the thread's topic" />
    </Container>
  );
}

export { Post };
