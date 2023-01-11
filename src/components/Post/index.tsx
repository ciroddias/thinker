import {
  BestReplyLabel,
  ArgumentField,
  Container,
  Content,
  Interactions,
  Interest as InterestStyles,
  Replies,
} from "./styles";
import { Header } from "./styles";
import { AiFillEye, AiOutlineComment } from "react-icons/ai";
import { useTheme } from "styled-components";
import { Argument as BestReply } from "../Argument";
import dayjs from "dayjs";
import { IReply } from "../../interfaces/IReply";
import { IInterest } from "../../interfaces/IInterest";
import Link from "next/link";

interface PostProps {
  id: string;
  username: string;
  text: string;
  createdAt: Date;
  interest: IInterest[];
  interested: boolean;
  replies: IReply[];
}

function Post({
  id,
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
      <BestReply
        key={replies[0].id}
        username={replies[0].user.username}
        createdAt={replies[0].createdAt}
        text={replies[0].text}
        agreed={false}
        agree={replies[0].agree}
        deviated={false}
        deviatedAmount={replies[0].deviated}
      />
      <span className="create-branch-label">Create your branch:</span>
      <ArgumentField placeholder="Please, keep the topic!" />
      <Link className="open-discussion" href={`/discussions/${id}`}>
        Open discussion
      </Link>
    </Container>
  );
}

export { Post };
