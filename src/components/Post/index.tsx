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

interface PostProps {
  username: string;
  text: string;
  createdAt: Date;
  interest: number;
  interested: boolean;
  replies: number;
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
          {interest}
        </InterestStyles>
        <Replies>
          <AiOutlineComment size={20} />
          {replies}
        </Replies>
      </Interactions>
      <BestReplyLabel>Best reply</BestReplyLabel>
      <BestReply
        username="Mary Stark"
        createdAt={new Date("08/09/2022")}
        text="I disagree"
        agreed={true}
        agree={2938}
        deviated={true}
        deviatedAmount={81}
      />
      <CommentField placeholder="Please, keep the thread's topic" />
    </Container>
  );
}

export { Post };
