import { CommentField, Container, Content, Interactions } from "./styles";
import { Header } from "./styles";
import { AiFillEye, AiOutlineComment } from "react-icons/ai";
import { useTheme } from "styled-components";
import { Comment as BestReply } from "../Comment";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

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
      <Interactions interested={interested}>
        <a>
          <AiFillEye
            size={20}
            color={interested ? theme.colors.secondary : ""}
          />{" "}
          {interest}
        </a>
        <p>
          <AiOutlineComment size={20} />
          {replies}
        </p>
      </Interactions>
      <BestReply />
      <CommentField placeholder="Please, keep the thread's topic" />
    </Container>
  );
}

export { Post };
