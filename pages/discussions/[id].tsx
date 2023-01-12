import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IPost } from "../../src/interfaces/IPost";
import { getPost } from "../../src/service/api";
import { Arguments, Container, Content, Header, Interactions } from "./styles";
import dayjs from "dayjs";
import { Argument } from "../../src/components/Argument";
import { AiFillEye } from "react-icons/ai";

export default function Discution() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState<IPost>({
    id: "",
    createdAt: new Date(),
    interest: [],
    replies: [],
    text: "",
    user: { id: "", username: "" },
  });

  useEffect(() => {
    fetchPostData();
    setLoading(false);
  }, [id]);

  async function fetchPostData() {
    const { status, post: postData } = await getPost(id as string);

    if (status === 200) return setPost(postData);
  }

  return (
    <Container>
      {loading ? (
        "loading..."
      ) : (
        <>
          <Header>
            <strong>{post.user.username}</strong>
            <time>{dayjs(post.createdAt).fromNow()}</time>
          </Header>
          <Content>
            <p>{post.text}</p>
            <Interactions>
              <AiFillEye size={20} />
              {post.interest.length}
            </Interactions>
          </Content>
          <Arguments>
            {post.replies.map((reply) => (
              <Argument
                key={reply.id}
                username={reply.user.username}
                text={reply.text}
                createdAt={reply.createdAt}
                agree={reply.agree}
                agreed={false}
                deviated={false}
                deviatedAmount={1}
              />
            ))}
          </Arguments>
        </>
      )}
    </Container>
  );
}
